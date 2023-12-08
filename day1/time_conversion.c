string timeConversion(string s) {
    int pos = s.find(":");
 int t = stoi(s.substr(0,pos));
 string r = s.substr(8,2);
if(t == 12 && r =="AM")return "00"+s.substr(pos,6);
else if(t <12 && r=="PM")return to_string((t+12))+s.substr(pos,6);
else return s.substr(0,8);
}