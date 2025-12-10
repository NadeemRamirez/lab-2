//Nadeem Hussain
// Q1: Solved using short-circuiting
let a = 5;
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// (4+5)=9 -> truthy -> "abc"
// "abc" * (a--=5) -> NaN
// NaN || ... -> NaN
// exp1 = NaN
// a = 4

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// ++a -> 5
// "foo" && 5+5=10 -> 10
// 10*10=100
// 100 && "false"+"test" -> "false"+"test" = "falsetest"
// "falsetest" || ... -> "falsetest"
// exp2 = "falsetest"
// a=5

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// a--=5 -> a=4
// a-- || "start" -> 5
// 5*4=20
// --a -> 3
// 3+"value"="3value"
// "3value"*3 -> NaN
// 20 && NaN -> NaN
// 3+NaN+"result" -> "NaNresult"
// exp3 = "NaNresult" 
// a=3

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// ++a -> 4
// "hello"*5 -> NaN
// 2+3*"abc" -> NaN
// NaN*1 -> NaN
// NaN+"xyz" -> "NaNxyz"
// "NaNxyz" && 0 -> 0
// exp4=0, a=4

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// true || ... -> true
// exp5=true, a=4

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// ++a -> 5
// 5+"abc"="5abc"
// "5abc" && 8+3=11
// 11 || ... -> 11
// exp6=11, a=5

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// ++a -> 6
// "foo5"*7 -> NaN
// 2*3 + 3=9
// NaN||9 -> 9
// exp7=9, a=6

let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// 1&&1 -> 1
// 1||... -> 1
// exp8=1, a=6

let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// 3*"abc" -> NaN
// NaN+2 -> NaN
// ++a=7
// "7test" && "3result" -> "3result"
// NaN || "3result" -> "3result"
// exp9="3result", a=7

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// ++a=8
// 8+0=8 -> truthy
// 8 && "start" -> "start"
// exp10="start", a=8

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// false && "hello" -> 0
// a++ || ... -> 8
// 8*4=32
// 0+32=32
// exp11=32, a=9

let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// "hello"*1=NaN
// NaN+2=NaN
// (false+1)*3=3
// 3&&"result" -> "result"
// NaN||"result" -> "result"
// exp12="result", a=9

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// a++=9, a=10
// 5*9=45
// 45+2=47
// 47&&(0+"test")="test"
// "test"||... -> "test"
// exp13="test", a=10

let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// false+"abc"="abc"
// "abc"*2 -> NaN
// --a=9 -> 9+1=10
// 10*"start"=NaN
// NaN+3=NaN
// NaN&&4 -> NaN
// NaN||"end" -> "end"
// exp14="end", a=9

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// 0+"foo"="foo"
// "foo"*3 -> NaN
// NaN+"result" -> "NaNresult"
// "NaNresult"||... -> "NaNresult"
// exp15="NaNresult", a=10

let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// 2*"end" -> NaN
// NaN|| ... -> false && true -> false
// "start"+(9+2)*5 -> "start55"
// "start55" && null -> null
// exp16=null, a=9

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// "test"+9="test9"
// 2*"test9" -> NaN
// 3+NaN -> NaN
// NaN && ... -> NaN
// NaN||0+"value"= "value"
// "value" && 4 -> 4
// exp17=4, a=8

let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// "start" && ... -> ... 
// false || 2*"end" -> NaN
// "start" && NaN -> NaN
// NaN || ... -> (++a+1)*3+"result" && 0
// ++a=9, 9+1=10
// 10*3+"result"=30+"result"="30result"
// "30result" && 0 -> 0
// exp18=0, a=9

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// 5+1=6 -> truthy -> "foo"
// "foo" || ... -> "foo"
// exp19="foo", a=9

let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// 2*3+"hello" -> "6hello"
// "6hello" && (false + ++a)*"result" -> ++a=10 -> 0+10=10 -> 10*"result"=NaN
// NaN || "end"+5="end5"
// exp20="end5", a=10

let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// ++a=11
// 5*(1+11)=60 -> truthy
// "test"+false="testfalse"
// 60 && "testfalse" -> "testfalse"
// exp21="testfalse", a=11

let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// "foo4" -> truthy
// ++a=12, 12+1=13
// 13*"start" -> NaN
// "foo4" && NaN -> NaN
// NaN|| ... -> ... && "test" -> 5+6*1=11 -> 11 && "test"="test"
// exp22="test", a=12

let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// a++=12
// 12+1=13
// 13*"end"=NaN
// NaN && "start" -> NaN
// NaN || 4*5=20 -> 20 && "result"="result"
// exp23="result", a=13

let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// 3+2*"test" -> NaN
// false + a--=0+13=13
// 13*"hello" -> NaN
// "world"+1="world1"
// NaN && "world1" -> NaN
// NaN || 2 -> 2
// exp24=2, a=12

let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// false || a--=12 -> truthy
// (3+4)*12=84
// 84 && 5=5
// exp25=5, a=11

let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// a++=11 -> a=12
// 3*2+12+1=19
// "hello" && 19 -> 19
// exp26=19, a=12

let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// 3*"test" -> NaN
// true+2=3 -> NaN+3=NaN
// NaN && "value" -> NaN
// NaN||... -> "start"+12="start12"
// a++=12 -> a=13
// exp27="start12", a=13

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// false+1=1 -> 1*"hello"=NaN
// a--=13 -> a=12
// 3+(13&&5)*"result" -> 3+5*"result" -> NaN
// NaN||"world" -> "world"
// exp28="world", a=12

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// true||1 -> true
// 2*true=2
// "start"+2="start2"
// "start2" && "value"*5 -> NaN
// NaN+"result"="NaNresult"
// exp29="NaNresult", a=12

let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// 1+3=4 -> 4*"test"=NaN
// 1*5=5, 5&&(0+"value")+"end"="valueend"
// exp30="valueend", a=11

let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// 3+"end"="3end" -> truthy
// exp31="3end", a=11

let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// (3*1=3)
// 3 -> truthy
// exp32=3, a=11

let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// 2+3=5 -> truthy
// "end"+11="end11"
// exp33="end11", a=12

let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// a--=12 -> a=11
// 4*12=48
// "hello"+48="hello48"
// exp34="hello48", a=11

let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// a--=11 -> a=10
// 11*4+5=49
// 49&&(0+"end")="end"
// exp35="end", a=10

let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// ++a=11
// 11+2=13 -> truthy
// exp36=13, a=11

let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// "hello" && 2+"test"="2test"
// exp37="2test", a=11

let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// a--=11 -> a=10
// 5*11=55
// 55 && 6*"result" -> NaN
// NaN||"2end" -> "2end"
// exp38="2end", a=10

let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// (0+1)*2=2 -> truthy
// "start" && 2 -> 2
// exp39=2, a=10

let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// "test"*5 -> NaN
// a--=10 -> a=9
// 6+"result"*4 -> 6+NaN -> NaN
// exp40=NaN, a=9

let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// (3+2)*"test"=NaN, NaN+5=NaN
// NaN||4*1=4 -> 4&&"hello"="hello"
// exp41="hello", a=9

let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// 2*"end"=NaN, 1+NaN=NaN
// false+3=3 -> truthy
// "result"*4 -> NaN
// NaN+a-- -> NaN
// exp42=NaN, a=8

let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// false && ... -> false
// 4*5=20 -> 20 && "start"+5="start5"
// exp43="start5", a=8

let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// 2*(1+5)=12, 3+12=15 -> truthy
// "value"+1="value1"
// exp44="value1", a=8

let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// 1+"test"="1test" -> truthy
// 5+3*8=5+24=29
// exp45=29, a=7

let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// a--=7 -> a=6
// 2*7+4=18 -> truthy -> "test"
// exp46="test", a=6

let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// 0+"result"="0result" -> truthy
// (3+1)*2=8 -> truthy
// "0result" && 8 -> 8
// exp47=8, a=6

let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// 1*"test"=NaN
// NaN&&4 -> NaN
// (true+2)*"hello"=3*"hello"=NaN
// NaN + a-- -> NaN
// a=5
// exp48=NaN, a=5

let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// 2*3+"result"="6result" -> truthy
// 4*(5+1)=24
// "6result" && 24 -> 24
// exp49=24, a=4

let exp50 = 32 && true - ++a && " " || "true";
// ++a=5
// true-5=1-5=-4
// 32 && -4 -> -4
// -4 && " " -> " "
// exp50=" ", a=5
let a = 5; // starting from end of exp50

let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// a--=5 -> 6
// (5+2)*6=42 -> truthy
// exp51=42, a=4

let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// ++a=5
// 5&&3 -> 3
// 3*"test"=NaN
// NaN||... -> 4 + "start"*(5+"result") -> "start5" * "result"=NaN
// 4+NaN=NaN
// exp52=NaN, a=5

let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// ++a=6
// 6+1=7
// "value"*7 -> NaN
// a--=6 -> a=5
// "start"+"end"="startend"
// exp53="startend", a=5

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// a--=5 -> a=4
// 5+2=7, 7*"result" -> NaN
// (false && 5)*"test"+4 -> 0+4=4
// NaN||4 -> 4
// exp54=4, a=4

let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// a--=4 -> a=3
// "start"+5*"4test" -> "start"+NaN -> "startNaN"
// exp55="startNaN", a=3

let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// a--=3 -> a=2
// 4*(3+1)=16 -> "16test"
// exp56="16test", a=2

let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// 3*"test"+1=NaN
// ++a=3, a--=3 -> 3*"result"=NaN
// NaN||"value" -> "value"
// exp57="value", a=2

let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// a--=2 -> a=1
// "2start"* "result" -> NaN
// false+2=2 -> 2+"end"+3="2end3"
// exp58="2end3", a=1

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// a--=1 -> a=0
// 5*(1+3)=20
// 20*"test" -> NaN
// exp59=NaN, a=0

let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// a--=0 -> a=-1
// "0value"* "test" -> NaN
// NaN+4=NaN
// exp60=NaN, a=-1

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// ++a=0
// 0+"result"="0result"
// 3+"0result"="30result"
// exp61="30result", a=0

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// a--=0 -> a=-1
// "0test"*3 -> NaN
// "start"+NaN="startNaN"
// exp62="startNaN", a=-1

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// ++a=0
// 0+2=2, 2*"test" -> NaN
// a--=0 -> 0+3=3, "value"+3*"result" -> NaN
// exp63=NaN, a=-1

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// 5*"end"=NaN
// a--=-1 -> -1+1=0, 0*"test"=0
// NaN+0=NaN
// "start"+(false&&"result")="start"+false="startfalse"
// exp64="startfalse", a=-2

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// a--=-2 -> a=-3
// -2+"test"="-2test", 3*-2test -> NaN
// "value"+NaN -> "valueNaN"
// exp65="valueNaN", a=-3

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// ++a=-2 -> -2+"test"="-2test", "*2" -> NaN
// a--=-2 -> -2+1=-1, -1*"start" -> NaN, + "result" -> NaN
// exp66=NaN, a=-3

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// a--=-3 -> -3+3=0 -> 0*"end"=0
// "start"+0="start0"
// exp67="start0", a=-4

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// a--=-4 -> -4+1=-3
// 2*-3=-6
// -6+"result"="-6result"
// exp68="-6result", a=-5

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// a--=-5 -> -5+"test"="-5test"
// "-5test"*5 -> NaN
// 4+NaN=NaN
// (false+2)*"start"=2*"start"=NaN
// exp69=NaN, a=-6

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// a--=-6 -> -6+2=-4, -4*"result" -> NaN
// (false&&"end")+3=0+3=3
// exp70=3, a=-7

let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// a--=-7 -> -7+3=-4, 2*-4=-8
// "test"+-8="test-8"
// exp71="test-8", a=-8

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// a--=-8 -> -8+"value"="-8value"
// 3*-8value -> NaN
// (false+2)*"test"=2*"test"=NaN
// exp72=NaN, a=-9

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// a--=-9 -> -9+"test"="-9test"
// "-9test"*4 -> NaN
// (false+1)*"result"=1*"result"=NaN + "start"=NaN
// exp73=NaN, a=-10

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// ++a=-9 -> -9+5=-4
// -4*"end" -> NaN
// a--=-9 -> -9+2=-7, -7*"result" -> NaN + "start" -> NaN
// exp74=NaN, a=-10

let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// 3*"test"=NaN
// a--=-10 -> -10+"start"="-10start"
// NaN + "-10start" -> NaN
// (false+1)*"result"=1*"result"=NaN
// exp75=NaN, a=-11

