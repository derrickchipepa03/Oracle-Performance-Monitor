#1 Project - Oracle database performance monitor

--- Introduction ---

The operational monitoring automation platform is a sql based project that aims to solve a real world problem database issues easier to solve through automation. Through the process of initally manually creating sql scripts that find these databse issues e.g. slow sql queries/ plsql queries, low fra/oradata space for backups, high cpu usage, library cache contention, row cache contention. These problems can be solved by sql scripts that search for these issues within a database.

--- Project Aim ---

The aim of this project is to see how collecting data about a database can be done more effectively. Most businesses use manual sql scripts and require dbas to frequently run sql scripts against a databse run awr reports and use stats packs to analyse perfromance issues within a databse. This requires time and potential to miss certain issues within the database that could cause lead to problems like outages. This project will use sql scripts but use automation so the sql scripts will be run frequently against the databse and use an algorithm where if there is an usse that has been spotted it can deploy the correct script to solve that problem.

--- Objective ---

- To create a realistic oracle environment that reflects enterprise database monitoring.
- To create sql scripts that run against a database for performance monitoring.
- To practice oracle privliges and user management.
- To create scripts that make audit reports based on the data retrieved.
- To design an operational database with tablespaces, tables and indexes.
To create automation python scripts that run the sql scripts to regularly to find performance issues.
- To create cases scenarios where if the sql scripts finds a problem in the databse it runs the next best possible scripts to solve the issue and if not not acion is performed.

- monitor CPU usage
- monitor memory usage
- monior fast recovery area (FRA) utilisation
- monitor archive log generation
- monitor blocking sessions
- monitor locking sessions
- detect slow statements
- detect inefficient pl/sql queries
- monitor wait events
- monitor row cache contention
- monitor undo usage
- monitor temporary tablespace usage
- monitor session activity
- monitor active transactions
- generate audit reports
- generate historical performance reports
- store monitoring data for trend analysis
- build python automation/shell(".sh" which uses pl sql) automation to execute sql scripts
- develop an automated design decision engine that determines the next diagnostic script based on detetced issues
- simulate real database failures for testing
- produce dashboards and visual reports
- evaluate the effectiveness of automated monitoring against manual dba processes

--- AS THIS PROJECT BUILDS THERE WILL BE MORE HERE ---

--- Project Overview: ---

This entire project aims to act as a production database but with my own test data#

THis will contain:
- user schemas
- app data
- monitoring views
- awr data
- performance stats

--- Monitoring SQL layer ---

A library of SQL scripts that query Oracle Dynamic Performance Views such as:

- V$SESSION
- V$SYSTEM_EVENT
- V$SQL
- V$SQLAREA
- V$SYSMETRIC
- DBA_TABLESPACES
- DBA_DATA_FILES
- DBA_HIST_SQLSTAT
- DBA_HIST_ACTIVE_SESS_HISTORY
- DBA_HIST_SYSMETRIC_SUMMARY

Each SQL script checks a specific performance metric.

Example:

Monitor FRA usage

↓

If FRA > 85%

↓

Generate alert

↓

Run archive log analysis script

↓

Recommend cleanup

--- Python Automation Layer ---

Python acts as the orchestration engine.

Responsibilities include:

- connecting to Oracle using cx_Oracle or python-oracledb
- executing SQL scripts
- collecting results
- storing monitoring history
- scheduling checks
- logging events
- generating reports
- sending alerts

--- Python modules ---

- oracledb
- pandas
- schedule
- matplotlib
- logging
- csv
- smtplib
Monitoring Repository ---

- monitoring history
- alerts
- incidents
- execution logs
- performance snapshots
- remediation history

Example tables:

MONITOR_RESULTS

INCIDENT_LOG

SCRIPT_HISTORY

DATABASE_METRICS

AUTOMATION_LOG

--- Reporting system ---

Generates:
- Daily reports
- Weekly reports
- Monthly reports
- Historical performance reports
- Capacity planning reports

Reports include:
- Top SQL
- CPU trends
- Tablespace growth
- Session trends
- Wait events
- Blocking sessions

--- Automation engine ---

The intelligent decision engine.

Rather than running every SQL script every minute, the platform follows a decision tree.

Example:

High CPU detected

↓

Run Active Session script

↓

Find Top SQL

↓

Run Explain Plan

↓

Generate recommendations

↓

Notify DBA

--- Methodology ---

The project follows an iterative software development lifecycle.

Phase 1

Research Oracle performance monitoring.

Study:

- Oracle Dynamic Performance Views
- AWR
- Statspack
- Oracle Enterprise Manager

Phase 2

Build Oracle environment.

Configure:

- Users
- Tablespaces
- Roles
- Permissions

Phase 3

Develop SQL monitoring scripts.

Each script focuses on one performance problem.

Example:

Slow SQL

↓

CPU

↓

Memory

↓

Undo

↓

Wait Events

↓

Sessions

Phase 4

Develop Python automation.

Python executes SQL scripts on schedules.

Results are parsed and stored.

Phase 5

Create simulated database problems.

Examples:

- Full tablespaces
- High CPU
- Blocking sessions
- Poor SQL execution plans
- Missing indexes
- Library cache contention

Final Phase

Evaluate effectiveness.

Compare:

Manual monitoring

vs

Automated monitoring

Measure:

- detection speed
- response time
- number of detected incidents
- DBA effort reduction

--- Database design ---
















--- Data generation ---













--- Sql monitoring and reporting ---


















--- Reporting and visualisation ---




















--- Future automation ---
















