import re

def scan_security(code):

 issues = []

 if "SELECT * FROM" in code and "+" in code:
    issues.append("Possible SQL Injection detected")

 if "eval(" in code:
    issues.append("Use of eval() is dangerous")

 if "password =" in code:
    issues.append("Hardcoded password detected")

 return issues