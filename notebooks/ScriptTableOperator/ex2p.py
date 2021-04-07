################################################################################
# The contents of this file are Teradata Public Content
# and have been released to the Public Domain.
# Licensed under BSD; see "license.txt" file for more information.
# Copyright (c) 2020 by Teradata
################################################################################
#
# R And Python Analytics with SCRIPT Table Operator
# Orange Book supplementary material
# Alexander Kolovos - February 2020 - v.2.0
#
# Example 2: Clustering (Python version)
# File     : ex2p.py
#
# Use case:
# Based on Pycluster Workshop example in "Data Analysis with Open Source Tools"
# by Philipp K. Janert. Copyright 2011 Philipp K. Janert, 978-0-596-80235-6
# Identify a user-specified number of clusters in given data set of points at
# given locations. Classify each observation of the data set into a cluster,
# on the basis of the observation coordinates.
#
# Script accounts for the general scenario that an AMP might have no data.
#
# Requires numpy, sys and scikit-learn packages.
#
# Data Input:
# - ex2tbl table data from file "ex2data.csv". Contains the variables:
#   ObsID     : The unique ID of each observation
#   X_Coord   : The x coordinate of the observation
#   Y_Coord   : The y coordinate of the observation
#   ObsGroup  : Integer that identifies which group the obs belongs to
#
# Input Parameter:
# - n         : The number of clusters we want to create (default: n=5)
#
# Output:
# - X_Centroid: The cluster centroid x coordinate
# - Y_Centroid: The cluster centroid y coordinate
# - isil      : Silhouette coef for each obs (in [-1,1]). Clustering good if =0
# - silhCoef  : Average silhouette coefficient for data set
#
# Note: In the presence of multiple groups of data in the same data set,
#       meaningful cluster analysis on Teradata with the present script can be
#       performed only by operating on same-group observations.
#       For efficient analysis, ensure that each instance of the present script
#       operates on a single data partition.
#
################################################################################

# Load dependency packages
import pandas as pd
import sys
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_samples
from sklearn.metrics import silhouette_score

# The present script expects the number of clusters as an input argument.
# If no argument is specified, then use a default number of 5 clusters.
nIn = sys.argv[1]
if int(nIn) < 1:
    n = 5
else:
    n = int(nIn)

DELIMITER = ','

# Know your data: You must know in advance the number and data types of the
# incoming columns from the SQL Engine database!
# For this script, the input expected format is:
# 0: ObsID, 1: X coordinate, 2: Y coordinate, 3: ObsGroup
colNames = ['ObsID', 'x_coord', 'y_coord', 'ObsGroup']
# Of the above input columns, ObsID and ObsGroup are integers, and the
# coordinates are float variables.
# If any numbers are streamed in scientific format that contains blanks i
# (such as "1 E002" for 100), the following Lambda functions remove blanks
# from the input string so that Python interprets the number correctly.
sciStrToFloat = lambda x: float("".join(x.split()))
sciStrToInt = lambda x: int(float("".join(x.split())))
# Use these Lambda functions in the following converters for each input column.
converters = {0: sciStrToInt,
              1: sciStrToFloat,
              2: sciStrToFloat,
              3: sciStrToInt}

### Ingest the input data
###
dfIn = pd.read_csv(sys.stdin, sep=DELIMITER, header=None, names=colNames,
                   index_col=False, iterator=False, converters=converters)

# For AMPs that receive no data, exit the script instance gracefully.
if dfIn.empty:
    sys.exit()

# Isolate coordinates columns as array to use with KMeans.
data = dfIn[['x_coord', 'y_coord']].to_numpy()

# Define the K-means clustering object
kmeans = KMeans(n_clusters = n, max_iter = 50)

# Perform clustering and find centroids
#     predClus is the predicted cluster each observation is assigned to
#     centers are the centroid coordinates for each of the n clusters
predClus = kmeans.fit_predict(data)
centers = kmeans.cluster_centers_

# Assess the clustering quality
#    silhCoeff is the silhouette coefficient for each observation
#    silhScore is the average score for all observations
silhCoeff = silhouette_samples(data, predClus, metric='euclidean')
silhScore = silhouette_score(data, predClus, metric='euclidean')

# Print output: Current obsID, cluster it belongs to, coordinates of its cluster
# center, silhouette coefficient
# Export results to the SQL Engine database through standard output
for i in range( 0, dfIn.shape[0] ):
    print(dfIn.at[i, 'ObsID'], DELIMITER, dfIn.at[i, 'ObsGroup'], DELIMITER,
          predClus[i], DELIMITER, \
          centers[predClus[i], 0], DELIMITER, \
          centers[predClus[i], 1], DELIMITER, n, DELIMITER, \
          silhCoeff[i], DELIMITER, silhScore)
