echo %date%
set x=%date:~0,4%%date:~5,2%%date:~8,2%

cd C:\Program Files (x86)\Robware\RVTools\
c:

del D:\VMList-xlsx\*.xlsx

RVTools.exe -s 192.168.171.202 -u esxi6fi_guest -p aa1234!@#$6i -c ExportvInfo2xlsx -d D:\VMList-xlsx -f Arcserve_host(192_168_171_202).xlsx 

RVTools.exe -s 192.168.171.231 -u esxi6fa_guest -p aa1234!@#$6a -c ExportvInfo2xlsx -d D:\VMList-xlsx -f Arcserve_host(192_168_171_231).xlsx 

RVTools.exe -s 192.168.171.186 -u esxi3fe_guest -p aa1234!@#$3e -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_186).xlsx 

RVTools.exe -s 192.168.171.191 -u esxi3fe_guest -p aa1234!@#$3e -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_191).xlsx 

RVTools.exe -s 192.168.171.47 -u esxi6fi_guest -p aa1234!@#$6i -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_47).xlsx 

RVTools.exe -s 192.168.171.87 -u esxi3ff_guest -p aa1234!@#$3f -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_87).xlsx 

RVTools.exe -s 192.168.171.14 -u esxi6fk_guest -p aa1234!@#$6k -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_14).xlsx 

RVTools.exe -s 192.168.69.125 -u vc6fl_guest -p Aa1234!@#$6l -c ExportvInfo2xlsx -d D:\VMList-xlsx -f OutsideSys_Testhost(192_168_69_125).xlsx 

RVTools.exe -s 192.168.171.235 -u vc6fk_guest -p Aa1234!@#$6k -c ExportvInfo2xlsx -d D:\VMList-xlsx -f InsideSys(192_168_171_235).xlsx 

RVTools.exe -s 192.168.171.44 -u esxi6fb_guest -p aa1234!@#$6b -c ExportvInfo2xlsx -d D:\VMList-xlsx -f 3parvs(192_168_171_44).xlsx 

RVTools.exe -s 192.168.171.22 -u esxi3fc_guest -p aa1234!@#$3c -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_22).xlsx 

RVTools.exe -s 192.168.171.38 -u esxi3fc_guest -p Aa1234!@#$3c -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_38).xlsx 

RVTools.exe -s 192.168.171.48 -u esxi3fc_guest -p aa1234!@#$3c -c ExportvInfo2xlsx -d D:\VMList-xlsx -f VMhost(192_168_171_48).xlsx 

RVTools.exe -s 192.168.171.130 -u esxi6fl_guest  -p aa1234!@#$6l -c ExportvInfo2xlsx -d D:\VMList-xlsx -f sharepoint_ap(192_168_171_130).xlsx
 
RVTools.exe -s 192.168.171.233 -u esxi6fa_guest -p aa1234!@#$6a -c ExportvInfo2xlsx -d D:\VMList-xlsx -f APDB2(192_168_171_233).xlsx 

RVTools.exe -s 192.168.171.232 -u esxi6fa_guest -p aa1234!@#$6a -c ExportvInfo2xlsx -d D:\VMList-xlsx -f sharepoint_db(192_168_171_232).xlsx 

RVTools.exe -s 192.168.171.230 -u esxi6fg_guest -p aa1234!@#$6g -c ExportvInfo2xlsx -d D:\VMList-xlsx -f TB_host_3par(192_168_171_230).xlsx 

RVTools.exe -s 192.168.171.110 -u vc6fg_guest@doc.cdc.gov.tw -p Aa1234!@#$6g -c ExportvInfo2xlsx -d D:\VMList-xlsx -f DOC_vcsa60(192_168_171_110).xlsx
 
RVTools.exe -s 192.168.171.90 -u vc6fl_guest@r.cdc.gov.tw -p NxdF(iSP2Wjx1H14.629 -c ExportvInfo2xlsx -d D:\VMList-xlsx -f R_vcsa60(192_168_171_90).xlsx
 
RVTools.exe -s 192.168.171.158 -u vc6fg_admin@newdoc.cdc.gov.tw -p Aa1234!@#$6g -c ExportvInfo2xlsx -d D:\VMList-xlsx -f NEWDOCVC (192.168.171.158).xlsx
 
RVTools.exe -s 192.168.171.23 -u vc6fj_admin@vsphere.local -p Aa1234!@#$6j -c ExportvInfo2xlsx -d D:\VMList-xlsx -f Vxrail (192.168.171.23).xlsx
 
NET STOP W3SVC

NET START W3SVC

RVToolsMergeExcelFiles.exe -input D:\VMList-xlsx\InsideSys(192_168_171_235).xlsx;D:\VMList-xlsx\Vxrail.xlsx;D:\VMList-xlsx\OutsideSys_Testhost(192_168_69_125).xlsx;D:\VMList-xlsx\3parvs(192_168_171_44).xlsx;D:\VMList-xlsx\Arcserve_host(192_168_171_202).xlsx;D:\VMList-xlsx\Arcserve_host(192_168_171_231).xlsx;D:\VMList-xlsx\DOC_vcsa60(192_168_171_110).xlsx;D:\VMList-xlsx\NEWDOCVC.xlsx;D:\VMList-xlsx\R_vcsa60(192_168_171_90).xlsx;D:\VMList-xlsx\sharepoint_ap(192_168_171_130).xlsx;D:\VMList-xlsx\sharepoint_db(192_168_171_232).xlsx;D:\VMList-xlsx\TB_host_3par(192_168_171_230).xlsx;D:\VMList-xlsx\VMhost(192_168_171_14).xlsx;D:\VMList-xlsx\VMhost(192_168_171_47).xlsx;D:\VMList-xlsx\VMhost(192_168_171_87).xlsx -output D:\VMList-xlsx\vmlist.xlsx


pause