(function(){
	//常用的js的数组去重
	var unqie=function(ar){
		var arr=[];
		if(typeof ar == "object" && Object.prototype.toString.call(ar) === '[object Array]'){
			for(var i=0;i<ar.length;i++){
				if(arr.indexOf(ar[i])===-1){
					arr.push(ar[i]);
				}	
			}
		}
		return arr;
	}

	//验证是否是数组的方法
	function isArray(obj) {
    	return Object.prototype.toString.call(obj) === '[object Array]';
	}

	//兼容版本的getelEmentsByClassName
	function getElemName(classname){
	 if (document.getElementsByClassName) {
                var results = [];
                var name = document.getElementsByClassName(classname);
                results.push(name)
            } else {
                var results = results || [];
                var nodes = document.getElementsByTagName("*");
                // 2 遍历
                for (var i = 0; i < nodes.length; i++) {
                    var cNodes = nodes[i];
                    var cNodeClsName = cNodes.className;
                    // debugger
                    var clsNames = cNodeClsName.split(" ");
                    for (var j = 0; j < clsNames.length; j++) {
                        if (clsNames[j] === classname) {
                            results.push(cNodes);
                        }
                    }

                }
            }
            return results;
	}
	//移动端封装tap事件
	function tap(){
		if(!HTMLElement.prototype.tap){
			this.touchstart=function(){

			};
			this.touchmove=function(){

			};
			this.touchend=function(){

			};
		}
	}
	//手风琴效果组件
	var Accordion=function(){
		var isShow=true;
		this.onclick=function(e){
			if(isShow){
				e.target.style.diplay="none";
			}else{
				e.target.style.diplay="block";
			}
		}
	}


	//tab切换组件

	//折叠面板组件

	//下拉刷新上拉加载

	//轮播组件

	//分页组件

	//懒加载组件	
}())