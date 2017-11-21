//性别
 $(".weui-cells_checkbox").on("click",".weui-check__label",function(){
      let value = $(this).attr("value");
      $(".weui-cell__hd i").removeClass("active");
      $(this).find(".weui-cell__hd i").addClass("active");
      console.log(value);
      console.log($(this));
  })
 // 出生年月
console.log($("#date").val());
 // 年月日时分秒
 $("#time-format").datetimePicker({
    title: '按时间',
    yearSplit: '年',
    monthSplit: '月',
    dateSplit: '日',
    times: function () {
      return [  // 自定义的时间
        {
          values: (function () {
            var hours = [];
            for (var i=0; i<24; i++) hours.push(i > 9 ? i : '0'+i);
            return hours;
          })()
        },
        {
          divider: true,  // 这是一个分隔符
          content: '时'
        },
        {
          values: (function () {
            var minutes = [];
            for (var i=0; i<59; i++) minutes.push(i > 9 ? i : '0'+i);
            return minutes;
          })()
        },
        {
          divider: true,  // 这是一个分隔符
          content: '分'
        }
      ];
    },
    onChange: function (picker, values, displayValues) {
      console.log(values);
    }
 });
 // 时辰
 $("#hour").picker({
  title: "按时辰",
  cols: [
    {
      textAlign: 'center',
      values: ['子时 (23 - 01点)', '丑时 (01 - 03点)', '寅时 (03 - 05点)', '卯时 (05 - 07点)', '辰时 (07 - 09点)', '巳时 (09 - 11点)', '午时 (11 - 13点)', '未时 (13 - 15点)', '申时 (15 - 17点)', '酉时 (17 - 19点)', '戌时 (19 - 21点)', '亥时 (21 - 23点)']
    }
  ]
});

