Script Table Operator and Map functions with teradataml Demonstration Notebooks for Jupyter
Version 1.0
--------------------------------------------------------------------------------
README file for STO and Map functions with teradataml demonstration notebooks for Jupyter bundle
Copyright (c) 2021 by Teradata
Licensed under BSD; see "license.txt" file in the bundle root folder.
================================================================================


1. General Introduction
--------------------------------------------------------------------------------

The Script Table Operator and Map functions with teradataml demonstration notebooks for Jupyter consists of 2 notebooks which showcase the following:

- Python-SCRIPT-Sandbox.ipynb

Python notebook that demonstrates SCRIPT Table Operator: Sandbox and Interaction

Example use case:
- Clustering analysis of a set of observations by using a K-Means algorithm.

Example goals:
- Using the STO Sandbox environment to test Python scripts locally on client before installing them on Vantage.
- Executing scripts with the SCRIPT Table Operator (STO) through the teradataml STO Script() API.


- Python-MapFunctions.ipynb
Python notebook that demonstrates Map functions: map_row() and mape_partition().

Example use cases:
- Group grade processing with map_row().
- Simple Micromodeling example: Model training and scoring of housing data. 
  Data are partitioned on the basis of the home style feature, and a different model is trained in the Advanced SQL Engine for each home style. 
  Then, test data are scored with the corresponding models. Both operations are performed on the user end through using map_partition().
  
Example goals:

- Using the teradataml DataFrame methods map_row() and map_partition() to apply a Python function to each row or group of rows (partition).

In order to use the notebooks, you will need the following:

a) SCRIPT Table Operator (STO) must be enabled in your target Advanced SQL Engine, and the Teradata Packages for In-nodes Analytics must be 
installed on its nodes. Specifically, the required packages for Python are teradata-python and teradata-python-addons

b) For the Map functions to operate correctly, the Python version and the Python dill add-on library on the client must be the same version as 
in the In-nodes installed distribution.

c)This notebook utilizes several Python packages in addition to teradataml which you may need to install on your client.

d)The Sandbox Script utilizes the STO Sandbox environment which is available at downloads.teradata.com


2. Information
--------------------------------------------------------------------------------

The present bundle comprises of the following folders and files. 

README.txt
license.txt
Python-MapFunctions.ipynb
Python-SCRIPT-Sandbox.ipynb
ex2data.csv
ex2dataTbl.csv
ex2p.py

3. Changelogs
--------------------------------------------------------------------------------

For change logs across file versions, please look into the corresponding files.
If unmodified, a file may have no changelog but still follow the versioning of
the rest of the files in the repository.
