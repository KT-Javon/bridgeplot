
//小视频
    $(function(){
      // 页面加载完成
      $(".video li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".video_tab").hide()
        // 默认内容部分是隐藏的
        $(".video_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".video li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//小品
    $(function(){
      // 页面加载完成
      $(".sketch li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".sketch_tab").hide()
        // 默认内容部分是隐藏的
        $(".sketch_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".sketch li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
   
//舞台剧
    $(function(){
      // 页面加载完成
      $(".stage li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".stage_tab").hide()
        // 默认内容部分是隐藏的
        $(".stage_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".stage li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
    
//电影
    $(function(){
      // 页面加载完成
      $(".movie li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".movie_tab").hide()
        // 默认内容部分是隐藏的
        $(".movie_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".movie li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//综艺
    $(function(){
      // 页面加载完成
      $(".variety li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".variety_tab").hide()
        // 默认内容部分是隐藏的
        $(".variety_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".variety li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });
    
//商业
    $(function(){
      // 页面加载完成
      $(".business li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".business_tab").hide()
        // 默认内容部分是隐藏的
        $(".business_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".business li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });
//专题
    $(function(){
      // 页面加载完成
      $(".special li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".special_tab").hide()
        // 默认内容部分是隐藏的
        $(".special_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".special li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });
//创作中心
    $(function(){
      // 页面加载完成
      $(".creative li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".creative_tab").hide()
        // 默认内容部分是隐藏的
        $(".creative_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".creative li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });
//直播排行
    $(function(){
      // 页面加载完成
      $(".live-rank li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".anchors").hide()
        // 默认内容部分是隐藏的
        $(".anchors:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".live-rank li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

//排行
    $(function(){
      // 页面加载完成
      $(".rank li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank").hide()
        // 默认内容部分是隐藏的
        $(".main-rank:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank").hide()
        // 默认内容部分是隐藏的
        $(".main-rank:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank2 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank2").hide()
        // 默认内容部分是隐藏的
        $(".main-rank2:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank2 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank3 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank3").hide()
        // 默认内容部分是隐藏的
        $(".main-rank3:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank3 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank4 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank4").hide()
        // 默认内容部分是隐藏的
        $(".main-rank4:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank4 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank5 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank5").hide()
        // 默认内容部分是隐藏的
        $(".main-rank5:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank5 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank6 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank6").hide()
        // 默认内容部分是隐藏的
        $(".main-rank6:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank6 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank7 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank7").hide()
        // 默认内容部分是隐藏的
        $(".main-rank7:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank7 li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

    $(function(){
      // 页面加载完成
      $(".rank8 li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".main-rank8").hide()
        // 默认内容部分是隐藏的
        $(".main-rank8:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".rank8li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    });

//客服
    $(document).ready(function(){
        $(".load").mouseover(function(){
           $(".phoneload").show();
        });
        $(".load").mouseout(function(){
           $(".phoneload").hide();
        });
    });

    $(document).ready(function(){
        $(".wb").mouseover(function(){
           $(".sinlang").show();
        });
        $(".wb").mouseout(function(){
           $(".sinlang").hide();
        });
    });

    $(document).ready(function(){
        $(".wechat").mouseover(function(){
           $(".offical").show();
        });
        $(".wechat").mouseout(function(){
           $(".offical").hide();
        });
    });
//排序
    $(function(){
      // 页面加载完成
      $(".paixu li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".paixu_tab").hide()
        // 默认内容部分是隐藏的
        $(".paixu_tab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".paixu li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 

//data
    $(function(){
      // 页面加载完成
      $(".data li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".fancenum").hide()
        // 默认内容部分是隐藏的
        $(".fancenum:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".data li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//稿件
    $(function(){
      // 页面加载完成
      $(".ctb li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".fancenum").hide()
        // 默认内容部分是隐藏的
        $(".fancenum:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".ctb li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
    //增量数据
    $(function(){
      // 页面加载完成
      $(".trend li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".ted_num").hide()
        // 默认内容部分是隐藏的
        $(".ted_num:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".trend li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
    //个人中心
    $(function(){
      // 页面加载完成
      $(".security-list li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".security-right").hide()
        // 默认内容部分是隐藏的
        $(".security-right:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".security-list li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//会员积分
    $(function(){
      // 页面加载完成
      $(".vip-jf li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".points-index").hide()
        // 默认内容部分是隐藏的
        $(".points-index:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".vip-jf li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//消息中心
    $(function(){
      // 页面加载完成
      $(".sapce-list li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".space-right").hide()
        // 默认内容部分是隐藏的
        $(".space-right:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".sapce-list li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//消息中心
    $(function(){
      // 页面加载完成
      $(".tab-bar li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".dnm-card").hide()
        // 默认内容部分是隐藏的
        $(".dnm-card:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".tab-bar li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//用户
    $(function(){
      // 页面加载完成
      $(".nav-men li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".col-lf").hide()
        // 默认内容部分是隐藏的
        $(".col-lf:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".nav-men li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 
//.contribution-content
    $(function(){
      // 页面加载完成
      $(".contribution-list li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".contribution-content").hide()
        // 默认内容部分是隐藏的
        $(".contribution-content:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".contribution-list li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 