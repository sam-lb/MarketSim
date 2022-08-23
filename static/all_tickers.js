ALL_TICKERS = ['XOM', 'GE', 'MSFT', 'BP', 'C', 'PG', 'WMT', 'PFE', 'HBC', 'TM', 'JNJ', 'BAC', 'AIG', 'TOT', 'NVS', 'MO', 'GSK', 'MTU', 'JPM', 'RDS/A', 'CVX', 'SNY', 'VOD', 'INTC', 'IBM', 'ENI', 'E', 'CSCO', 'BRK/A', 'UBS', 'WFC', 'AT&T', 'T', 'RDS/B', 'KO', 'CHL', 'PEP', 'VZ', 'COP', 'DNA', 'AMGN', 'STD', 'HPQ', 'GOOG', 'HD', 'WB', 'SI', 'NOK', 'UNH', 'TWX', 'QCOM', 'ING', 'DCM', 'EON', 'AZN', 'MRK', 'SLB', 'TEF', 'MBT', 'NTT', 'BHP', 'CSR', 'BCS', 'DELL', 'MER', 'BBV', 'MDT', 'ABT', 'DT', 'AXP', 'MS', 'SAP', 'S', 'ORCL', 'LLY', 'AZ', 'GS', 'AAPL', 'AXA', 'WYE', 'STO', 'EBAY', 'PBR', 'UTX', 'FTE', 'AAUK', 'DCX', 'DB', 'ERICY', 'MOT', 'FNM', 'BA', 'MMM', 'SPY', 'RTP', 'USB', 'CAJ', 'TSM', 'MC', 'TYC', 'ABN', 'HMC', 'EN', 'BLS', 'LYG', 'NSANY', 'RY', 'LOW', 'SNE', 'YHOO', 'DIS', 'MFC', 'TGT', 'TEM', 'BTI', 'UPS', 'WLP', 'TXN', 'SZE', 'FRE', 'BBL', 'CAT', 'BMY', 'PHG', 'MCD', 'WAG', 'DEO', 'ECA', 'BF', 'AMX', 'WM', 'NAB', 'HAL', 'DOW', 'UN', 'BRG', 'PBR/A', 'OXY', 'ACL', 'BNS', 'VLO', 'RIO', 'NMR', 'EXC', 'PRU', 'MET', 'TD', 'CMCSA', 'LEH', 'TI', 'GLW', 'SU', 'V', 'DD', 'CEO', 'ANZ', 'NWS/A', 'FDC', 'MLEA', 'BR', 'ALL', 'CNQ', 'REP', 'CCL', 'WBK', 'HON', 'BUD', 'EMC', 'NHY', 'EMR', 'STA', 'AMAT', 'BT', 'CAH', 'FDX', 'BAY', 'UL', 'DVN', 'ELE', 'BMO', 'BNI', 'DA', 'VIA/B', 'LMT', 'KEP', 'CL', 'SGP', 'MRO', 'NGG', 'GILD', 'SSL', 'AET', 'AA', 'TEVA', 'KB', 'RIG', 'KMB', 'BHI', 'DUK', 'D', 'STI', 'SO', 'AEG', 'IMI', 'NEM', 'BEN', 'APC', 'ADP', 'APA', 'BBY', 'HIG', 'PCZ', 'SLF', 'GDT', 'PUK', 'BRK/B', 'CX', 'BK', 'SBUX', 'TXU', 'CNI', 'ADBE', 'HIT', 'ITW', 'COST', 'AFL', 'UNP', 'BCM', 'SLM', 'TOC', 'IX', 'GD', 'AT', 'BAX', 'MITSY', 'MON', 'ABB', 'CVS', 'BCE', 'L', 'TLM', 'COF', 'CMX', 'CMCSK', 'NOC', 'GDW', 'QQQQ', 'NSC', 'BBT', 'NCC', 'YPF', 'PTR', 'WIT', 'ITY', 'EFA', 'KPN', 'FITB', 'VE', 'CSG', 'PGR', 'INFY', 'ADM', 'HCA', 'EOG', 'SYK', 'PKX', 'CFC', 'STT', 'SYMC', 'BRCM', 'AIB', 'BBD', 'MRVL', 'SHLD', 'DTV', 'TS', 'ACN', 'ALA', 'MHP', 'SCHW', 'SPI', 'SYY', 'PNC', 'SCM', 'CB', 'AMD', 'MCO', 'SPG', 'AMZN', 'LR', 'CBS', 'RIO^', 'TLS', 'LTR', 'GENZ', 'RTN', 'TELN', 'LVS', 'FD', 'AL', 'STJ', 'CHT', 'BSX', 'FUJIY', 'XTO', 'K', 'ACE', 'WMI', 'SPLS', 'GIS', 'DHR', 'SKM', 'CD', 'ZMH', 'NWS', 'CRHCY', 'PX', 'WY', 'KYO', 'DE', 'NVO', 'STM', 'IRE', 'PEG', 'MHS', 'MMC', 'TMX', 'FE', 'FPL', 'ERTS', 'LPL', 'PEG^A', 'MCK', 'PD', 'AU', 'BDX', 'ITU', 'IP', 'BSY', 'WF', 'CA', 'CCU', 'GPS', 'NKE', 'FRX', 'AGN', 'WFT', 'NBG', 'SUNW', 'F', 'KSS', 'SHG', 'CI', 'TRP', 'BIIB', 'RF', 'TP', 'NXY', 'RAI', 'GCI', 'LM', 'KFT', 'OMC', 'MEL', 'HDI', 'AEP', 'CME', 'ADI', 'A', 'ETR', 'AHC', 'KEY', 'WOS', 'BSC', 'GSF', 'TI/A', 'EIX', 'WMB', 'VOLVY', 'YUM', 'PCG', 'IBN', 'TLK', 'MAR', 'SLE', 'AKZOY', 'CCJ', 'PAYX', 'APD', 'COH', 'GM', 'SYT', 'HET', 'EMQ', 'IVV', 'MXIM', 'JCI', 'BOX', 'KR', 'HOT', 'XRX', 'TKG', 'ESRX', 'SHR', 'NOV', 'LUV', 'PFG', 'WPPGY', 'NJ', 'EDS', 'BTU', 'BJS', 'NUE', 'NT', 'IR', 'AVP', 'UMC', 'SUN', 'JCP', 'CHK', 'TKC', 'EOP', 'RIMM', 'ABV', 'KMG', 'PCU', 'NBR', 'TVE', 'AMT', 'STX', 'TLD', 'KUB', 'EDP', 'MAS', 'GNW', 'NIPNY', 'PLD', 'VNO', 'SNDK', 'CPB', 'SRE', 'GGP', 'ATE', 'NFB', 'EQR', 'WWY', 'TCA^', 'RUK', 'MTB', 'KNBWY', 'TKA', 'CELG', 'IGT', 'AHO', 'KTC', 'FCX', 'ABV/C', 'LUX', 'CUK', 'XL', 'PCAR', 'LU', 'PT', 'TJX', 'KMI', 'RIN', 'ROK', 'DHI', 'GFI', 'CSX', 'NTAP', 'ED', 'PPL', 'OTE', 'NTRS', 'RG', 'HNZ', 'LLTC', 'ROH', 'JWN', 'PDG', 'CN', 'Q', 'EWJ', 'CHU', 'TXT', 'AES', 'BBBY', 'ENB', 'NE', 'PGN', 'FO', 'AOC', 'ASML', 'DO', 'RTRSY', 'FIA', 'CAG', 'UPM', 'UU', 'CIT', 'MUR', 'MGM', 'SWY', 'ENL', 'ADO', 'F^A', 'PSO', 'CEG', 'AEE', 'SNP', 'PHM', 'KLAC', 'JNPR', 'ODP', 'AMP', 'GLH', 'WFMI', 'DGX', 'TROW', 'PPG', 'ASN', 'ET', 'MI', 'CM', 'EPD', 'XLNX', 'ETN', 'APOL', 'PBI', 'LLL', 'N', 'TDK', 'CVH', 'UB', 'VIP', 'ASO', 'SII', 'NSM', 'HLT', 'LTD', 'ITT', 'LNC', 'BMET', 'PSA', 'SNN', 'ADSK', 'CSC', 'TNT', 'CCE', 'POT', 'DOV', 'TV', 'GG', 'ABS', 'INTU', 'HSY', 'MT', 'ECL', 'CTX', 'SEO', 'MU', 'HUM', 'PH', 'CMA', 'SAN', 'CLX', 'TRB', 'AUO', 'EP', 'BXP', 'CIN', 'EOC', 'SNV', 'EEM', 'CHIR', 'RCL', 'MDY', 'IACI', 'MIR', 'MEDI', 'RYAAY', 'HAN', 'JBL', 'ZION', 'EXPE', 'IVX', 'MBI', 'IWM', 'SRA', 'FSH', 'AMTD', 'ABK', 'FISV', 'NBL', 'CNA', 'COL', 'UPL', 'HRB', 'MGA', 'KIM', 'CINF', 'VAR', 'HTX', 'ENI', 'SID', 'MCHP', 'CHS', 'SHPGY', 'EXPD', 'ESV', 'LEN', 'AAA', 'XEL', 'JP', 'LH', 'TSP', 'SOV', 'ICI', 'NVDA', 'KMP', 'DIA', 'FLR', 'CP', 'NZT', 'LFC', 'UVN', 'ASD', 'SIRI', 'DTE', 'AZO', 'AVZ', 'CBE', 'NIHD', 'PUB', 'FMS', 'HCBK', 'GPC', 'ACS', 'KBH', 'HMY', 'AVB', 'VMC', 'IPR', 'SHW', 'CTSH', 'HAR', 'CCH', 'EK', 'SWN', 'DVY', 'HSP', 'SDX', 'CTAS', 'BRL', 'HMT', 'IFX', 'RRD', 'ALTR', 'BPO', 'PBG', 'STR', 'CHRW', 'PIXR', 'CPL', 'WEN', 'FNF', 'PXD', 'NCR', 'FSL/B', 'PCL', 'DASTY', 'ELN', 'USX', 'X', 'BDK', 'CCI', 'CNX', 'AWC', 'GRMN', 'NFX', 'IHG', 'MAT', 'BCR', 'PCP', 'SFA', 'TKP', 'BG', 'BAB', 'TU', 'JOYG', 'RSA', 'DEG', 'NWL', 'PTEN', 'DOX', 'SAFC', 'GRP', 'WYNN', 'UST', 'GWW', 'SAY', 'GGB', 'LRCX', 'BER', 'KSE', 'PHI', 'ERF', 'HRS', 'RHI', 'HDB', 'VFC', 'DRI', 'AKH', 'STP', 'SSP', 'AMOV', 'VRSN', 'CBSS', 'UNM', 'TTM', 'SEPR', 'AIZ', 'WPO', 'WFR', 'FLEX', 'MTG', 'RE', 'AVY', 'OCR', 'LYO', 'MOS', 'AN', 'DISH', 'TMK', 'ANF', 'XMSR', 'CBH', 'STOSY', 'FAST', 'MHK', 'TLAB', 'TLWT', 'WTM', 'PDE', 'RX', 'LUK', 'AYE', 'HNT', 'FMX', 'LXK', 'IWD', 'TMS', 'ACI', 'NI', 'BOT', 'DVA', 'CVC', 'CGA', 'CMVT', 'CAM', 'IRM', 'WSH', 'TMO', 'WHR', 'CTXS', 'BPOP', 'NTLI', 'TIF', 'DDR', 'DG', 'VTI', 'ABI', 'HBAN', 'CHA', 'STZ', 'TOL', 'TIN', 'CHKP', 'RSG', 'NXTP', 'RHAT', 'DF', 'ATI', 'REXMY', 'MAC', 'GYI', 'HMA', 'MNST', 'SJR', 'CDNS', 'TSO', 'EFX', 'JDSU', 'AV', 'AC', 'ORI', 'LBTYA', 'RDC', 'DRE', 'ISRG', 'BCH', 'ERJ', 'WEC', 'JEC', 'WTW', 'MWV', 'GR', 'EC', 'MTA', 'DNB', 'LBTYK', 'BMC', 'IWF', 'JOE', 'SANYY', 'FHN', 'HUN', 'PDCO', 'RDN', 'ASH', 'WDC', 'AAP', 'CKFR', 'MAN', 'MRBK', 'AMLN', 'WAT', 'MX', 'TNE', 'BF/B', 'EL', 'APCC', 'CBG', 'HRL', 'ASBC', 'NYB', 'SCG', 'WSM', 'KRI', 'SEE', 'BEAS', 'STN', 'CMI', 'AMCR', 'KG', 'LEG', 'APH', 'JNS', 'MIK', 'URBN', 'ATYT', 'FAF', 'AXS', 'CDWC', 'CC', 'AMB', 'EQT', 'TMIC', 'IPS', 'CRM', 'LAF', 'NVR', 'PCW', 'CSB', 'STU', 'REG', 'SIAL', 'CTL', 'POM', 'SVU', 'IPG', 'PBCT', 'MDU', 'CIG', 'TKS', 'MYL', 'USG', 'SHY', 'GTK', 'XRAY', 'PNW', 'GLG', 'BLL', 'TRH', 'PDS', 'BF/A', 'LAMR', 'ASX', 'FII', 'MKTAY', 'ROST', 'CEPH', 'ISIL', 'LNCR', 'ARW', 'ALV', 'SWK', 'NVT', 'CZN', 'SEIC', 'TAC', 'IJR', 'HP', 'NYT', 'ACV', 'AMR', 'AIV', 'HSIC', 'DISCA', 'ETP', 'SFI', 'GPN', 'BYD', 'AEOS', 'MTL', 'PPDI', 'LRY', 'BRO', 'CNP', 'ACGL', 'ACF', 'EMN', 'MLM', 'NVLS', 'ATVI', 'DST', 'NRG', 'MFE', 'ALD', 'PNR', 'BNL', 'RRC', 'TSS', 'PMI', 'ACAS', 'TAP', 'CNB', 'MICC', 'KWK', 'BVN', 'IJD', 'ENDP', 'VRTX', 'HAS', 'NOVL', 'HCP', 'SVM', 'LOGI', 'XEC', 'MDR', 'EV', 'FDO', 'LIZ', 'BEC', 'CPS', 'CNO', 'CYN', 'JBHT', 'BDM', 'ORLY', 'EAS', 'WPI', 'JNY', 'IVGN', 'TRZ', 'CXG', 'BC', 'OSK', 'TSN', 'WTR', 'BOL', 'WRI', 'WES', 'BVF', 'AGE', 'PPP', 'PETM', 'PLL', 'CEN', 'LSI', 'MIL', 'WGR', 'MKC', 'AVT', 'SLG', 'FTI', 'TE', 'CVD', 'FL', 'FRK', 'RBK', 'TRI', 'FSL', 'FRT', 'EPE', 'PXP', 'JNC', 'EAT', 'PRE', 'TIP', 'RL', 'UDR', 'TEX', 'SPIL', 'LNT', 'ADS', 'ROP', 'CBSH', 'DADE', 'COGN', 'OSI', 'CERN', 'NDAQ', 'HCC', 'TER', 'CYTC', 'SLR', 'THC', 'DNR', 'CPT', 'ENR', 'CYH', 'RYL', 'IMDC', 'SMG', 'TDW', 'OI', 'IIT', 'TKR', 'TCB', 'CRL', 'AKAM', 'EXBD', 'GSL', 'UTIW', 'HSC', 'GLD', 'RA', 'PDLI', 'ICBC', 'ERIE', 'MKL', 'PAS', 'DPL', 'CDIS', 'WFSI', 'RJF', 'SSCC', 'CE', 'RYN', 'RCI', 'RNR', 'TSG', 'BMS', 'MLNM', 'DAIEY', 'FST', 'CPWR', 'QLGC', 'SNPS', 'FHR', 'PTV', 'CMS', 'CECO', 'RMK', 'MEE', 'ZBRA', 'IJH', 'JEF', 'HNI', 'SIG', 'VTR', 'ESI', 'AMG', 'PAA', 'KNM', 'CG', 'BWA', 'SPW', 'ANAT', 'KMX', 'PL', 'SPP', 'BCO', 'AGU', 'CCK', 'RHA', 'IM', 'LPX', 'LZ', 'CHH', 'SBL', 'JHX', 'HUG', 'GIB', 'HPT', 'RRI', 'CSE', 'HCR', 'MCY', 'IVW', 'NST', 'SON', 'LVLT', 'SMI', 'APCS', 'IFF', 'IVE', 'ACH', 'IFIN', 'MOLX', 'UTR', 'ARI', 'RGA', 'BOKF', 'PA', 'IMCL', 'AF', 'EYE', 'HB', 'CEM', 'CBI', 'AW', 'BZH', 'FRO', 'RSH', 'ARG', 'CLE', 'NU', 'WMG', 'SFD', 'PKI', 'ADCT', 'XLE', 'TK', 'CFR', 'RMBS', 'AFG', 'GPM', 'NIS', 'YRCW', 'CAKE', 'F^S', 'GIL', 'AME', 'SGMS', 'AVX', 'R', 'FIC', 'BDN', 'EGN', 'IWN', 'NCX', 'DCI', 'ATK', 'WSTC', 'FCE/A', 'MDC', 'SHU', 'SGR', 'ICE', 'FULT', 'PNP', 'JLG', 'WL', 'BUH', 'BAP', 'SUG', 'RMD', 'BKS', 'ATG', 'NFG', 'AJG', 'SKYF', 'IDTI', 'CMC', 'CLI', 'FWLT', 'GT', 'OKE', 'UNT', 'GGG', 'VAL', 'THE', 'MDZ', 'LI', 'VIA', 'BOBJ', 'MDG', 'TNB', 'SFG', 'PZE', 'CBL', 'USM', 'DBD', 'TIE', 'TMA', 'SKS', 'VSH', 'CNF', 'FTO', 'PENN', 'BOH', 'SPF', 'SLAB', 'SRP', 'AGG', 'DLTR', 'SRCL', 'WTI', 'NLC', 'RS', 'KMR', 'NDE', 'NATI', 'FMS^', 'BLK', 'GOL', 'VLY', 'THG', 'HLTH', 'RESP', 'GNTX', 'LAUR', 'TPP', 'FFH', 'PWI', 'IRF', 'NXL', 'GPRO', 'FFIV', 'BRE', 'TFX', 'EW', 'VSL', 'TRW', 'KCI', 'FLS', 'SJM', 'AFFX', 'WBS', 'COG', 'CNH', 'TRN', 'WSC', 'PKG', 'SCO', 'LSTR', 'MEOH', 'PIO', 'SM', 'COO', 'CBT', 'WLT', 'IDXX', 'OGE', 'CVA', 'DNP', 'NFS', 'PSD', 'SOSA', 'SCI', 'ARMHY', 'ABER', 'ANN', 'APPX', 'UHS', 'THO', 'CNT', 'HLF', 'HAVS', 'LFL', 'LIHRY', 'CVG', 'TEK', 'IEX', 'MTD', 'CBD', 'AEM', 'FCS', 'IWO', 'LCC', 'MOLXA', 'KZL', 'AMH', 'DJ', 'CHD', 'CLF', 'IWB', 'SBS', 'IJJ', 'MLS', 'LQD', 'MXO', 'HHS', 'CFFN', 'TECD', 'EEP', 'SNA', 'CIEN', 'CY', 'MTE', 'HUB/B', 'HOLX', 'ALEX', 'EDMC', 'DRC', 'NTES', 'KAR', 'Y', 'CYT', 'WOOF', 'UIS', 'URI', 'CPRT', 'SIE', 'HOV', 'PII', 'CRS', 'ESS', 'WCC', 'LII', 'LEAP', 'MGI', 'NEW', 'KMT', 'UGI', 'HRP', 'CR', 'JBLU', 'NBIX', 'WPS', 'PHLY', 'RPM', 'COGT', 'ADTN', 'CNET', 'SANM', 'AGR', 'GGY', 'ALKS', 'TECH', 'BNG', 'HOC', 'RBS^F', 'BKD', 'TY', 'TPK', 'IN', 'BJ', 'ENH', 'MDP', 'CSQ', 'PDX', 'TDS', 'TSU', 'PGS', 'SPN', 'BLC', 'TRMB', 'HCN', 'FMC', 'CEI', 'CRE', 'BBH', 'ACP', 'VHI', 'DLM', 'GXP', 'RES', 'URS', 'CSL', 'ATO', 'HE', 'HNP', 'ARA', 'FDRY', 'CHRT', 'MSM', 'IDC', 'SJT', 'CGT', 'WFSL', 'FMER', 'RHD', 'WTNY', 'VVC', 'POOL', 'TDS/S', 'EWBC', 'CLP', 'ANDW', 'AVID', 'NBP', 'JLL', 'MVK', 'MLHR', 'ANT', 'SEB', 'CBRL', 'HYSL', 'WLK', 'ALB', 'OSG', 'KOSP', 'FMD', 'PNRA', 'FMCN', 'OMX', 'DYS', 'AHL', 'ACXM', 'MTW', 'ZNT', 'CPO', 'GMT', 'TSCO', 'OIS', 'FCL', 'STLD', 'BCF', 'ABGX', 'FR', 'PALM', 'KF', 'TCP', 'ARE', 'MEU', 'CREE', 'MSCC', 'ATR', 'MNT', 'NFP', 'WACLY', 'NSR', 'CLS', 'CCRT', 'CRI', 'RDY', 'MMP', 'COLM', 'KRC', 'SY', 'O', 'TSFG', 'HANS', 'HXM', 'DDS', 'CTC', 'FDS', 'HXL', 'ONNN', 'OCAS', 'LNG', 'AGO', 'TTC', 'NUV', 'NFJ', 'ATML', 'FMT', 'ACG', 'TCO', 'KSU', 'NAV', 'VLI', 'ITG', 'FS', 'LEN/B', 'XLF', 'IWV', 'VCLK', 'GES', 'RAD', 'CWTR', 'VSEA', 'LECO', 'JKHY', 'HU', 'WDR', 'SBAC', 'SSD', 'IBOC', 'BAK', 'TBL', 'CKH', 'PNY', 'IWS', 'CETV', 'STE', 'FBR', 'BEBE', 'XLV', 'APPB', 'SNSA', 'DSL', 'PLCM', 'WOR', 'PSUN', 'BRC', 'CGI', 'ETW', 'OXPS', 'KYPH', 'GAS', 'MW', 'BXS', 'EQY', 'BGG', 'KFN', 'TRMD', 'JW/A', 'UAG', 'THX', 'CATY', 'CORS', 'WR', 'EAC', 'PTF', 'CAL', 'COMS', 'PTP', 'AXE', 'REY', 'MCRS', 'CLC', 'LPNT', 'JQC', 'PER', 'RGS', 'SIVB', 'QGEN', 'BSG', 'KNX', 'LSS', 'XLU', 'PMTC', 'PMCS', 'EVV', 'GET', 'IPCR', 'NKTR', 'PSYS', 'SWFT', 'BIDU', 'WABC', 'PAY', 'UHAL', 'CBS/A', 'PHK', 'SYD', 'MRH', 'CAI', 'HTLD', 'GBM', 'APU', 'USPI', 'WERN', 'BPL', 'GME', 'NTRI', 'ABY', 'WLL', 'ORH', 'HIW', 'LEA', 'AQNT', 'ZQK', 'AYI', 'GHL', 'PCBC', 'TIBX', 'SKYW', 'HC', 'PNM', 'GVA', 'UCI', 'HTG', 'FCNCA', 'FOSL', 'MRX', 'BRY', 'CXW', 'EVT', 'HEW', 'JAH', 'SMV/A', 'DYN', 'JPS', 'HR', 'FLO', 'SONC', 'PSS', 'NAL', 'BBG', 'SIRF', 'GMK', 'VRX', 'AH', 'DPZ', 'RI', 'WSO', 'PLT', 'PPS', 'MTH', 'THQI', 'ROS', 'FLIR', 'BGP', 'ARO', 'BE', 'BRP', 'HYDL', 'SIGI', 'NNI', 'PWR', 'CHR', 'ABN^G', 'IJS', 'AG', 'MIM', 'AVCT', 'SVR', 'CRR', 'DV', 'WCN', 'PPC', 'MVL', 'USTR', 'PAAS', 'UCBH', 'PWAV', 'GLYT', 'OSIP', 'CYMI', 'ETG', 'FLA', 'EPP', 'EAGL', 'GLBL', 'ICF', 'OFC', 'IBB', 'AFR', 'SQM/A', 'CU', 'CNXT', 'BHS', 'ICOS', 'PRA', 'COLT', 'OII', 'WCG', 'FMBI', 'TRMK', 'CUZ', 'HSVLY', 'MET^B', 'OPWV', 'AMMD', 'VTS', 'IJK', 'QSFT', 'WGII', 'UBSI', 'IKN', 'WBSN', 'TRK', 'IWR', 'ROC', 'RDA', 'AHC^', 'GEMP', 'GDV', 'FNFG', 'IT', 'PRK', 'MEDX', 'NX', 'SRZ', 'IMN', 'STFC', 'IFN', 'VPHM', 'ATU', 'BEAV', 'MYOG', 'RBA', 'NHP', 'MORN', 'ICO', 'HGT', 'OCENY', 'NLY', 'KRO', 'IGR', 'ELX', 'PHH', 'BHE', 'SBF', 'CRDN', 'TRBS', 'PVH', 'BOW', 'TOM', 'BLI', 'WGL', 'EFII', 'ANR', 'BPT', 'FUN', 'MXRE', 'WAB', 'GFIG', 'PCH', 'YZC', 'NFLX', 'FAX', 'DP', 'ATW', 'UTHR', 'NAU', 'PEI', 'MPG', 'ELNK', 'AAI', 'TLB', 'NDSN', 'ENER', 'CHRS', 'OLN', 'ROL', 'PTNR', 'OS', 'GW', 'ZGEN', 'VVR', 'KCS', 'HME', 'MSA', 'PRGO', 'VMSI', 'RCII', 'CIB', 'UMBF', 'PTI', 'HW', 'TSRA', 'HGSI', 'ARXT', 'CDL', 'MPS', 'SQM', 'PNX', 'KEX', 'UCO', 'SDA', 'ENTG', 'ARRO', 'PGL', 'AHM', 'ETH', 'SFY', 'ONB', 'XLK', 'EXP', 'SHO', 'WHI', 'KOMG', 'SLGN', 'LANC', 'GMST', 'SMTC', 'DBRN', 'DQE', 'ANSS', 'DWA', 'ISE', 'GTRC', 'RLI', 'DRS', 'TW', 'ISBC', 'IDCC', 'HRH', 'ALO', 'NTY', 'WRE', 'IAG', 'TRID', 'ISCA', 'JBX', 'MYG', 'CGNX', 'MAFB', 'WHQ', 'ARLP', 'RFMD', 'TTI', 'HAE', 'GDI', 'IDR', 'C^Z', 'SCMR', 'CHE', 'NUAN', 'NUS', 'WWW', 'DFG', 'ILA', 'LEE', 'ALFA', 'STTS', 'REM', 'DLX', 'LTM', 'PNK', 'CRK', 'PFCB', 'TOA', 'SFL', 'RNWK', 'SGY', 'LAZ', 'IDA', 'UNFI', 'DKS', 'BLUD', 'FDP', 'BEV', 'TUP', 'ALE', 'EXP/B', 'CHZ', 'VCI', 'WSF', 'HBHC', 'WON', 'OVTI', 'USU', 'HPC', 'SWC', 'BTM', 'FGP', 'LDG', 'RECN', 'GBBK', 'IJT', 'MFLX', 'RNP', 'LQU', 'HLEX', 'ARS', 'ABD', 'CDE', 'INFA', 'BWP', 'MOGN', 'CW', 'BAX^', 'ADRX', 'GMR', 'SNH', 'PFS', 'WW', 'FXI', 'SGP^M', 'THOR', 'CASY', 'SCT', 'EQIX', 'UEPS', 'ALX', 'CJR', 'WTFC', 'EME', 'GAP', 'LQ', 'USA', 'OEH', 'STRA', 'ATMI', 'ICA', 'ANSL', 'BCA', 'IDIX', 'PETC', 'SRX', 'JPC', 'AKS', 'BIO', 'GCA', 'OMM', 'EMT', 'CVBF', 'ESE', 'BRKS', 'ASCA', 'BRCD', 'HANA', 'UMPQ', 'BUCY', 'SLH', 'LIN', 'KRON', 'NJR', 'BMR', 'PDA', 'AIT', 'OMI', 'UARM', 'PLXS', 'LHO', 'ATPG', 'NNN', 'TXI', 'LRW', 'RSP', 'SPSN', 'TRO', 'ARRS', 'SMH', 'NIO', 'SINA', 'DGIN', 'HTV', 'ARM', 'CEC', 'TSAI', 'BN', 'MYS', 'ARB', 'IYH', 'FBN', 'PTRY', 'WCI', 'GOLD', 'DTC', 'FWRD', 'YSI', 'ABN^E', 'PLCE', 'CTV', 'PVA', 'THRX', 'UVV', 'MER^H', 'JSN', 'PPT', 'NRPH', 'AM', 'DRQ', 'ARP', 'AHG', 'PBKS', 'VPRT', 'BDE', 'IEV', 'SCHL', 'LYV', 'ZLC', 'CBCF', 'MATW', 'MGLN', 'FCH', 'FORM', 'NCT', 'GAB', 'SBP', 'MWY', 'VARI', 'CMED', 'ALAB', 'SSAG', 'ELP', 'KFS', 'EGO', 'ITRI', 'DRIV', 'DPTR', 'JCOM', 'MKSI', 'BKH', 'AVL', 'REV', 'HAWK', 'BDC', 'DRL', 'SNDA', 'AEA', 'PKD', 'DTAS', 'PSSI', 'FILE', 'IEF', 'QSII', 'ELY', 'SONS', 'VRNT', 'GGC', 'NITE', 'BFR'];

TOP_TICKERS = ['AAPL', 'ABBV', 'ABT', 'ACN', 'ADBE', 'AMD', 'AMGN', 'AMZN', 'ANTM', 'ASML', 'AVGO', 'AXP', 'AZN', 'BABA', 'BAC', 'BHP', 'BMY', 'CATL', 'CMCSA', 'COP', 'COST', 'CRM', 'CSCO', 'CVS', 'CVX', 'DHR', 'DIS', 'FB', 'GOOG', 'HD', 'HON', 'HSBC', 'IBM', 'ICBC', 'INTC', 'JNJ', 'JPM', 'KO', 'LIN', 'LLY', 'LOW', 'LVMH', 'MA', 'MCD', 'MDT', 'MRK', 'MS', 'MSFT', 'NEE', 'NKE', 'NVDA', 'NVIDIA', 'NVO', 'NVS', 'ORCL', 'PEP', 'PFE', 'PG', 'PM', 'PTR', 'QCOM', 'RTX', 'RY', 'SCHW', 'SHEL', 'SNY', 'T', 'TCEHY', 'TD', 'TM', 'TMO', 'TMUS', 'TSLA', 'TSM', 'TSMC', 'TTE', 'TXN', 'UNH', 'UNP', 'UPS', 'V', 'VZ', 'WFC', 'WMT', 'XOM'];