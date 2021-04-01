Vantage Analytics Library and teradataml Demonstration Notebooks for Jupyter
Version 1.0
--------------------------------------------------------------------------------
README file for VAL/teradataml demonstration notebooks for Jupyter bundle
Copyright (c) 2021 by Teradata
Licensed under BSD; see "license.txt" file in the bundle root folder.
================================================================================


1. General Introduction
--------------------------------------------------------------------------------

The Vantage Analytics Library and teradataml demonstration notebooks for Jupyter consists of 4 notebooks which showcase the following:

- Vantage_Analytic_Library-Descriptive_Statistics_and_Transformation.ipynb
SQL notebook that demonstrates the SQL required to execute the VAL descriptive statistics and data transformations.  This includes:

1) Descriptive Statistics
   - Values
   - Frequency
   - Histogram
   - Statistics
   - Data Explorer
   - Overlap
   - Adaptive Histogram
   - Text Field Analysis	
2) Data Transformations
   - Bin Code
   - Formula Derivation
   - Design Code
   - Null Value Replacement
   - Recode
   - Rescale
   - Sigmoid
   - Z-Score

- Vantage_Analytic_Library-Hypothesis_Tests.ipynb
SQL notebook that demonstrates the SQL required to execute the VAL statistical tests.  This includes:

1) Parametric Tests
   - Two Sample T-Test for Equal Means
   - F-Test (N-Way)
   - F-Test/ANOVA (2-Way)
2) Binomial Tests
   - Binomial / Z Test
   - Binomial Sign Test
3) Tests based on Contingency Tables
   - Chi Square Test
   - Median Test
4) Kolmogorov / Smirnoff Tests
   - Kolmogorov / Smirnoff Tests (One Sample)
   - Lilliefors Test
   - Shapiro-Wilk Test
   - D’Agostino and Pearson Test
   - Smirnov Test
5) Rank Tests
   - Mann-Whitney / Kruskal-Wallis Test
   - Wilcoxon Signed Ranks Test
   - Friedman Test with Kendall’s Coefficient of Concordance & Spearman’s Rho

- Vantage_Analytic_Library-Analytic_Algorithms_and_Scoring.ipynb
SQL notebook that demonstrates the SQL required to execute the VAL advanced analytics algorithms and evaluation/scoring functions.  This includes:

1) Matrix Building
   - (E)SSCP
   - Correlation
   - Covariance
2) Linear Regression
   - Micro-modeling by segment
   - Scoring
   - Stepwise variants
3) Logistic Regression
   - Micro-modeling by segment
   - Scoring
   - Stepwise variants
4) Factor Analysis
   - Micro-reduction by segment
   - Factor Scoring
5) Fast K-Means Clustering
   - K-Means Scoring
6) Gain Ratio Decision Trees
   - Decision Tree Scoring
7) Association Rules
   - Sequence Analysis

- VAL-teradataml-Demo.ipynb
Python notebook that demonstrates how to call VAL functionality through teradataml and visualize the results in Python.  This includes:

1) Python calls for VAL functions including:
   - Values
   - Statistics
   - Frequency
   - Histogram
   - Correlation/Covariance Matrices
   - Logistic Regression
   - Logistic Regression Model Evaluation
   - Logistic Regression Scoring
2) Plotting using
   - Matplotlib
   - plotly
3) Parsing and displaying XML reports

In order to use the notebooks, you will need the following:

a. The Vantage Analtyic Library (VAL), including tutorial data must be installed.
b. For the Python notebook, you may need to install additional Python libraries on your client.
c. As instructed in the notebooks, specify the host name or ip address of your Vantage system. 
d. As instructed in the notebooks, set XSPD to the name of the databse where VAL is installed.
e. As instructed in the notebooks, set QLID to your Vantage login id

2. Information
--------------------------------------------------------------------------------

The present bundle comprises of the following folders and files. 

README.txt
license.txt
Vantage_Analytic_Library-Descriptive_Statistics_and_Transformation.ipynb
Vantage_Analytic_Library-Hypothesis_Tests.ipynb
Vantage_Analytic_Library-Analytic_Algorithms_and_Scoring.ipynb
VAL-teradataml-Demo-TechBytes.ipynb


3. Changelogs
--------------------------------------------------------------------------------

For change logs across file versions, please look into the corresponding files.
If unmodified, a file may have no changelog but still follow the versioning of
the rest of the files in the repository.
