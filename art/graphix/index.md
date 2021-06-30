---
title: "Graphix"
featuredImage: "./preview.png"
category: "tech"
date: "10/01/2014"
description: "Using code to make pretty things"
tags:
  - graphics
---

<img style="width:100%;" src="http://mjacobs.me/__archive/circles/1.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/1b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/2.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/2b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/3.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/3b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/4.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/4b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/5.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/5b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/6.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/6b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/7.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/7b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/8.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/8b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/9.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/9b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/10.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/10b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/11.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/11b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/12.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/12b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/13.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/13b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/14.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/14b.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/15.png"><img style="width:100%;" src="http://mjacobs.me/__archive/circles/15b.png">

<script>
	var numCircles = 15
	var count = 0
  var output = ""
  console.log(output)
	while(count++ < numCircles){
		output += "<img src='http://mjacobs.me/circles/" + count + ".png'>"
    output += "<img src='http://mjacobs.me/circles/" + count + "b.png'>"
    console.log(output)
	}
	document.write(output)
</script>
