// new TypeIt(".intro-txtbig", {
// strings: ["반갑습니다:)","웹퍼블리셔 김지이입니다"],
// speed: 100,
// }).go();



new TypeIt(".intro-txtbig", {
  speed: 50,
  waitUntilVisible: true,
  loop: false
})

new TypeIt(".intro-txtbig", {
  speed: 50,
  waitUntilVisible: true,
  loop: false
})
.type("<")
.pause(100)
.type("h") 
.pause(100)
.type("1")
.pause(100) 
.type(">")
.pause(100) 
.type("<")
.pause(100)
.type("/") 
.pause(100) 
.type("h") 
.pause(100) 
.type("1") 
.pause(100)
.type(">") 
.pause(100)
.move(-5, { delay: 500 })
.break({ delay: 500 })
.break({ delay: 500 })
.move(-1)
.type("반갑습니다:)")
.break({ delay: 500 })
.type("<strong>웹퍼블리셔김지이<strong>")
.pause(100) 
.type("입니다")
.pause(100) 
.go(); 




new TypeIt(".mbti-txt", {
  speed: 50,
  waitUntilVisible: true,
  loop: false
})
.type("MBTI는 infp..?") // 타이핑
.pause(300) //멈춤
.delete(-6) // 이동(글자수)
.pause(300)
.type("sfp...?")
.pause(300) //멈춤
.delete(-8) // 이동(글자수)
.pause(300)
.pause(300)
.type(" infp / isfp 번갈아 나와요!")
.pause(1000)
.move(1)
.go(); // 실행



// go 시작 / String (,)콤마 줄바꿈