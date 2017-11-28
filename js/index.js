var imgList = [
	"https://image1.guazistatic.com/qn17083018215318827fa9dbea88e812348e6c96b287ea.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn1708301821526056492062c04bd66f5bf552ee548bf9.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830182156e7d897404ff6709cf0e86d45f0997a00.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830182157c99c8538bb2be65dbc2760e3fe971535.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830182157dbf18923c84732a20c1b718757fed15a.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn1708301821548e0b210d46c278be97e0955707e95e92.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn17083018215532bee93df81ec7f2f1641a940d5ce14f.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn1708301817022514a26115c6e7c56503f93ab5cc9711.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn17083018170275ac595af60f4a9dc726b2a08000b79d.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830181702ed1cd6eb95d3e1af4f79dc0c6d2e802f.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn1708301817028f51530c73b9701490cbe3c56a980d83.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830181702e44a908d9dff2a04dff25a85a4740319.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830181702df3fb7f2d322893f2c90366657fb4556.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn170830181702ee13b5943dea54c7fbeeb131b3c9a45c.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn17083018170290cfd3f506ada7bc4203e3a2a5950431.jpg?imageView2/1/w/600/h/400/q/88",
	"https://image1.guazistatic.com/qn1708301817020a2347f5f26f1b5a8b7514cf5c622287.jpg?imageView2/1/w/600/h/400/q/88"
];

var index = 0,
	$progress = $(".progress"),
	len = imgList.length;

//无序预加载用法
$.preload(imgList, {
	each: function(count) {
		$progress.html(Math.round((count + 1) / len * 100) + "%");
	},
	all: function() {
		$(".loading").hide();
		document.title = "1/" + len;
	}
});

//有序预加载
$.preload(imgList, {
	order: "ordered"
});

//按钮事件
$(".btn").on("click", function() {
	if("prev" === $(this).data("control")) { //上一张
		index = Math.max(0, --index);
	} else { //下一张
		index = Math.min(len - 1, ++index);
	}
	document.title = (index + 1) + "/" + len;
	$("#img").attr("src", imgList[index]);
});