$(function(){$("#js-top-phone .tab_item").not(":first").hide(),$("#js-top-phone .wrapper .tab").click(function(){$("#js-top-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active"),$("#js-top-phone .tab_item").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active"),$("#js-header-tabs .tab_item").not(":first").hide(),$("#js-header-tabs .wrapper .tab").click(function(){$("#js-header-tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active"),$("#js-header-tabs .tab_item").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active"),$.stellar({responsive:!0}),$("#js-slider").slick({dots:!0,speed:800,responsive:[{breakpoint:768,settings:{arrows:!1}}]}),$("#js-slider").hover(function(){$("#js-slider .slick-prev, #js-slider .slick-next").removeClass("hover").addClass("hover")},function(){$("#js-slider .slick-prev, #js-slider .slick-next").removeClass("hover")}),$("#js-slider").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS5qcyJdLCJuYW1lcyI6WyIkIiwibm90IiwiaGlkZSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJlcSIsInRoaXMiLCJpbmRleCIsImFkZENsYXNzIiwiZmFkZUluIiwic3RlbGxhciIsInJlc3BvbnNpdmUiLCJzbGljayIsImRvdHMiLCJzcGVlZCIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFycm93cyIsImhvdmVyIiwibWFnbmlmaWNQb3B1cCIsImRlbGVnYXRlIiwidHlwZSIsImdhbGxlcnkiLCJlbmFibGVkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxXQUdEQSxFQUFFLDJCQUEyQkMsSUFBSSxVQUFVQyxPQUMzQ0YsRUFBRSwrQkFBK0JHLE1BQU0sV0FDdENILEVBQUUsK0JBQStCSSxZQUFZLFVBQVVDLEdBQUdMLEVBQUVNLE1BQU1DLFNBQVNDLFNBQVMsVUFDcEZSLEVBQUUsMkJBQTJCRSxPQUFPRyxHQUFHTCxFQUFFTSxNQUFNQyxTQUFTRSxXQUN0REosR0FBRyxHQUFHRyxTQUFTLFVBSWxCUixFQUFFLDZCQUE2QkMsSUFBSSxVQUFVQyxPQUM3Q0YsRUFBRSxpQ0FBaUNHLE1BQU0sV0FDeENILEVBQUUsaUNBQWlDSSxZQUFZLFVBQVVDLEdBQUdMLEVBQUVNLE1BQU1DLFNBQVNDLFNBQVMsVUFDdEZSLEVBQUUsNkJBQTZCRSxPQUFPRyxHQUFHTCxFQUFFTSxNQUFNQyxTQUFTRSxXQUN4REosR0FBRyxHQUFHRyxTQUFTLFVBSWxCUixFQUFFVSxTQUNEQyxZQUFZLElBS2JYLEVBQUUsY0FBY1ksT0FDZkMsTUFBTSxFQUNMQyxNQUFPLElBQ1BILGFBRUdJLFdBQVksSUFDWkMsVUFDRUMsUUFBUSxPQU1makIsRUFBRSxjQUFja0IsTUFBTSxXQUNyQmxCLEVBQUUsa0RBQWtESSxZQUFZLFNBQVNJLFNBQVMsVUFFbkYsV0FDRVIsRUFBRSxrREFBa0RJLFlBQVksV0FNbEVKLEVBQUUsY0FBY21CLGVBQ2RDLFNBQVUsSUFDVkMsS0FBTSxRQUVOQyxTQUVFQyxTQUFTIiwiZmlsZSI6ImN1c3RvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cdC8qcGhvbmUtdGFic1xyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoXCIjanMtdG9wLXBob25lIC50YWJfaXRlbVwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xyXG5cdCQoXCIjanMtdG9wLXBob25lIC53cmFwcGVyIC50YWJcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiI2pzLXRvcC1waG9uZSAud3JhcHBlciAudGFiXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHQkKFwiI2pzLXRvcC1waG9uZSAudGFiX2l0ZW1cIikuaGlkZSgpLmVxKCQodGhpcykuaW5kZXgoKSkuZmFkZUluKCk7XHJcblx0fSkuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHJcblx0LypoZWFkZXItdGFic1xyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoXCIjanMtaGVhZGVyLXRhYnMgLnRhYl9pdGVtXCIpLm5vdChcIjpmaXJzdFwiKS5oaWRlKCk7XHJcblx0JChcIiNqcy1oZWFkZXItdGFicyAud3JhcHBlciAudGFiXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNqcy1oZWFkZXItdGFicyAud3JhcHBlciAudGFiXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHQkKFwiI2pzLWhlYWRlci10YWJzIC50YWJfaXRlbVwiKS5oaWRlKCkuZXEoJCh0aGlzKS5pbmRleCgpKS5mYWRlSW4oKTtcclxuXHR9KS5lcSgwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcblx0LypzdGVsbGFyLmpzXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JC5zdGVsbGFyKHtcclxuXHRcdHJlc3BvbnNpdmU6IHRydWVcclxuXHR9KTtcclxuXHJcblx0LypzbGlja1xyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoJyNqcy1zbGlkZXInKS5zbGljayh7XHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdCAgc3BlZWQ6IDgwMCxcclxuXHQgIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgXVxyXG5cdH0pO1xyXG5cclxuXHQkKCcjanMtc2xpZGVyJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNqcy1zbGlkZXIgLnNsaWNrLXByZXYsICNqcy1zbGlkZXIgLnNsaWNrLW5leHQnKS5yZW1vdmVDbGFzcygnaG92ZXInKS5hZGRDbGFzcygnaG92ZXInKTtcclxuXHR9LFxyXG5cdGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJyNqcy1zbGlkZXIgLnNsaWNrLXByZXYsICNqcy1zbGlkZXIgLnNsaWNrLW5leHQnKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHQvKm1hZ25pZmljLXBvcHVwXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLXNsaWRlcicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdCAgZGVsZWdhdGU6ICdhJywgLy8gY2hpbGQgaXRlbXMgc2VsZWN0b3IsIGJ5IGNsaWNraW5nIG9uIGl0IHBvcHVwIHdpbGwgb3BlblxyXG5cdCAgdHlwZTogJ2ltYWdlJyxcclxuXHQgIC8vIG90aGVyIG9wdGlvbnNcclxuXHQgIGdhbGxlcnk6IHtcclxuXHQgICAgLy8gb3B0aW9ucyBmb3IgZ2FsbGVyeVxyXG5cdCAgICBlbmFibGVkOiB0cnVlXHJcbiAgXHR9LFxyXG5cdH0pO1xyXG4gICAgXHJcbn0oKSk7Il19
