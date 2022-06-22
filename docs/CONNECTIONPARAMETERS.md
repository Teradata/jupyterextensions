

## Connection Parameters

The following table lists the connection parameters currently supported for use with the `Teradata SQL Extension for Jupyter`.

The goal of the underlying driver is to provide consistency with the connection parameters offered by the Teradata JDBC Driver, in terms of both parameter names and functionality.  For more details on the use of these parameters, see the Teradata JDBC Driver connection parameters [documented here](https://downloads.teradata.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#BGBHDDGB).

Any parameters not listed in this table will be ignored or errors will be reported as appropriate.

Parameter          | Default     | Type              | Description
------------------ | ----------- | ----------------- | -------------
`account`          |             | string            | Specifies the Teradata Database account. Equivalent to the Teradata JDBC Driver `ACCOUNT` connection parameter.
`cop`              | `"true"`    | boolean           | Specifies whether COP Discovery is performed.  Equivalent to the Teradata JDBC Driver `COP` connection parameter.
`coplast`          | `"false"`   | boolean           | Specifies how COP Discovery determines the last COP hostname. Equivalent to the Teradata JDBC Driver `COPLAST` connection parameter. When `coplast` is `false` or omitted, or COP Discovery is turned off, then no DNS lookup occurs for the coplast hostname. When `coplast` is `true`, and COP Discovery is turned on, then a DNS lookup occurs for a coplast hostname.
`dbs_port`         | `"1025"`    | integer           | Specifies the Teradata Database port number. Equivalent to the Teradata JDBC Driver `DBS_PORT` connection parameter.
`encryptdata`      | `"true"`    | boolean           | Controls encryption of data exchanged between the Teradata Database and the Teradata SQL Driver. Equivalent to the Teradata JDBC Driver `ENCRYPTDATA` connection parameter. It is not recommended that encryption be disabled.
`log`              | `"0"`       | integer or string | Controls driver debug logging. Somewhat equivalent to the Teradata JDBC Driver `LOG` connection parameter. This parameter's behavior is subject to change in the future. This parameter's value is currently defined as an integer in which the 1-bit governs function and method tracing, the 2-bit governs debug logging, and the 4-bit governs transmit and receive message hex dumps, and the 8-bit governs timing.  Compose the value by adding together 1, 2, 4, and/or 8.  Alternatively, specify the semi-colon separate values of `Debug`, `Function`, `Hex` and/or `Timing` (e.g. "log=Debug;Function").
`logdata`          |             | string            | Specifies extra data for the chosen logon authentication method. Equivalent to the Teradata JDBC Driver `LOGDATA` connection parameter.
`logmech`          | `"TD2"`     | string            | Specifies the logon authentication method. Equivalent to the Teradata JDBC Driver `LOGMECH` connection parameter. Supported values are `TD2`, `LDAP`, `KRB5` or `TDNEGO`.
`sip_support`      | `"true"`    | boolean           | Controls whether StatementInfo parcel is used. Equivalent to the Teradata JDBC Driver `SIP_SUPPORT` connection parameter.
`tmode`            | `"DEFAULT"` | string            | Specifies the transaction mode. Equivalent to the Teradata JDBC Driver `TMODE` connection parameter. Possible values are `DEFAULT`, `ANSI`, or `TERA` (values must be uppercase).
