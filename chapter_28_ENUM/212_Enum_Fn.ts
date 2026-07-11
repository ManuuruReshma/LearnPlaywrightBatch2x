enum Severity {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = "critical",
    BLOCKING = 'blocking'
}

console.log(Severity.LOW);

enum ENV {
    Dev = "DEV PATH",
    Staging = "STAG PATH",
    QA = "QA PATH",
    Prod = "PROD Path"
}
console.log(ENV.QA);