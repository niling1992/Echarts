var MyApp = {
    InitddlDept: function () {
        //测试数据
        //var data = [
        //    { name: '最新活动公告', value: 20},
        //    { name: '社会服务组织', value: 40 },
        //    { name: '优惠政策', value: 40 },
        //    { name: '营商环境展示', value: 40 }
        //];
        $.post("GetEchartsData", {}, function (result) {
            var data = result;
            var option = MyEcharts.ChartOptionTemplates.Pie(data, "Pie", "{b}点击次数 : {c} ({d}/%)");
            var container = $("#echart")[0];
            var opt = MyEcharts.ChartConfig(container, option);
            MyEcharts.Charts.RenderChart(opt);
        })
       
    } 
};


$(function () {
    MyApp.InitddlDept();
});
