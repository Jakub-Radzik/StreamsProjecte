export const portToAppMap: Map<number, string> = new Map([
  [3, 'Compressed TCP'],
  [6, 'TCP'],
  [13, 'Daytime Protocol'],
  [20, 'FTP Data Transfer'],
  [21, 'FTP Control'],
  [22, 'SSH'],
  [23, 'Telnet'],
  [24, 'Priv-Mail'],
  [25, 'SMTP'],
  [26, 'RSFTP'],
  [37, 'Time Protocol'],
  [53, 'DNS'],
  [67, 'DHCP Server'],
  [68, 'DHCP Client'],
  [80, 'HTTP'],
  [110, 'POP3'],
  [113, 'Authentication Service'],
  [119, 'NNTP (Usenet)'],
  [135, 'MSRPC'],
  [139, 'NetBIOS Session Service'],
  [143, 'IMAP'],
  [161, 'SNMP'],
  [194, 'IRC'],
  [443, 'HTTPS'],
  [445, 'Microsoft-DS (Active Directory/SMB)'],
  [465, 'SMTPS (Secure SMTP)'],
  [514, 'Syslog'],
  [543, 'KLogin'],
  [544, 'KShell'],
  [554, 'RTSP'],
  [587, 'SMTP (Submission)'],
  [631, 'IPP (Internet Printing Protocol)'],
  [873, 'rsync'],
  [993, 'IMAPS (Secure IMAP)'],
  [995, 'POP3S (Secure POP3)'],
  [1080, 'SOCKS Proxy'],
  [1433, 'Microsoft SQL Server'],
  [1521, 'Oracle Database'],
  [3306, 'MySQL'],
  [3389, 'RDP (Remote Desktop Protocol)'],
  [5432, 'PostgreSQL'],
  [5631, 'pcAnywhere'],
  [5900, 'VNC (Virtual Network Computing)'],
  [5984, 'CouchDB'],
  [6379, 'Redis'],
  [8080, 'HTTP Alternative'],
  [8443, 'HTTPS Alternative'],
  [9200, 'Elasticsearch'],
  [11211, 'Memcached'],
]);
