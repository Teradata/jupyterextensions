"""
* The contents of this file are Teradata Public Content 
* and have been released to the Public Domain.
* Please see license.txt file in the package for more information.
* Alexander Kolovos - 4 Sep 2015 - v.1.2
* Copyright 2015-2019 Teradata. All rights reserved.
* Licensed under BSD

R And Python Analytics with the SCRIPT Table Operator
Orange Book supplementary material
Example 2 - Simulation - Python

Simulation Bank renege example taken from:
https://simpy.readthedocs.org/en/latest/examples/bank_renege.html
Scenario:
  A counter with a random service time and customers who renege. Based on the
  program bank08.py from TheBank tutorial of SimPy 2. (KGM)

Requires random, numpy, sys and simpy packages.

Required input:
- table ex2tbl defined in ex2dataTblDef.txt
- ex2tbl data from file ex2data.txt

Input parameters:
INTERVAL_CUSTOMERS : Time interval (minutes) between customer entries
MIN_PATIENCE       : Minimum time (minutes) customers will wait
MAX_PATIENCE       : Maximum time (minutes) customers will wait
TIME_IN_BANK       : Time (minutes) a customer spends being served
MAX_MINUTES        : Process observation time (minutes)

Output:
Number of customers that visited in MAX_MINUTES
Number of customers that reneged in MAX_MINUTES
Average waiting time per customer

"""
import random
import simpy
import numpy as np
import sys

DELIMITER='\t'

# Load data from table, one row at a time
# Expecting table with 2 columns: ObsID, RandomSeed
tbldatalist = []
while 1:
    try:
        line = raw_input()
        if line == '':   # Exit if user provides blank line
            break
        else:
            allnum = line.split(DELIMITER)
            allnum = [x.replace(" ","") for x in allnum]
            tbldatalist.append(allnum)
    except (EOFError):   # Exit if reached EOF or CTRL-D
        break
        
ndl = len(tbldatalist)

# If the present AMP has no data, then exit this script instance.
if ndl == 0:
    sys.exit()

# Assumes data set has ObsID in col 1, RandomSeed in col 2
nDataCols = 2
# Convert list into array
tbldata = np.array(tbldatalist).reshape(ndl,nDataCols)
del tbldatalist

obsID = tbldata[:,0]
randSeed = tbldata[:,1]

INTERVAL_CUSTOMERS = sys.argv[1]
MIN_PATIENCE = sys.argv[2]
MAX_PATIENCE = sys.argv[3]
TIME_IN_BANK = sys.argv[4]
MAX_MINUTES = sys.argv[5]

RANDOM_SEED = 20           # A default random seed value. Here, seeds are input
INTERVAL_CUSTOMERS = 4.0   # Generate new customers roughly every x minutes
MIN_PATIENCE = 5           # Min. customer patience
MAX_PATIENCE = 10          # Max. customer patience
TIME_IN_BANK = 6.0         # Minutes a customer spends being served
MAX_MINUTES = 480          # Minutes to observe system behavior

def source(env, interval, counter):
    """Source generates customers randomly"""
    global iCust
    iCust = 0
    while 1:
        iCust += 1
        c = customer(env, 'Customer%02d' % iCust, counter, TIME_IN_BANK)
        env.process(c)
        t = random.expovariate(1.0 / interval)
        yield env.timeout(t)

def customer(env, name, counter, time_in_bank):
    """Customer arrives, is served and leaves."""
    arrive = env.now

    with counter.request() as req:
        patience = random.uniform(MIN_PATIENCE, MAX_PATIENCE)
        # Wait for the counter or abort at the end of our tether
        results = yield req | env.timeout(patience)

        wait = env.now - arrive
        global totWait
        totWait += wait
        global totReneged

        if req in results:
            # We got to the counter

            tib = random.expovariate(1.0 / time_in_bank)
            yield env.timeout(tib)

        else:
            # We reneged
            totReneged += 1

# Setup and start the simulation
for i in range( 0, len(randSeed) ):
    global totWait
    totWait = 0
    global totReneged
    totReneged = 0
    seedNo = randSeed[i]
    random.seed( seedNo )
    env = simpy.Environment()
    
    # Start processes and run
    counter = simpy.Resource(env, capacity=1)
    env.process(source(env, INTERVAL_CUSTOMERS, counter))
    env.run( until=MAX_MINUTES )
    
    print long(iCust), DELIMITER, long(totReneged), DELIMITER, totWait/iCust

