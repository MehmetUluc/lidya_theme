(()=>{function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,n;return o=t,(n=[{key:"init",value:function(){$(document).on("click",".btn-trigger-active-theme",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({url:route("theme.active"),data:{theme:t.data("theme")},type:"POST",success:function(e){e.error?LidyaPos.showError(e.message):(LidyaPos.showSuccess(e.message),window.location.reload()),t.removeClass("button-loading")},error:function(e){LidyaPos.handleError(e),t.removeClass("button-loading")}})})),$(document).on("click",".btn-trigger-remove-theme",(function(e){e.preventDefault(),$("#confirm-remove-theme-button").data("theme",$(e.currentTarget).data("theme")),$("#remove-theme-modal").modal("show")})),$(document).on("click","#confirm-remove-theme-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({url:route("theme.remove",{theme:t.data("theme")}),type:"POST",success:function(e){e.error?LidyaPos.showError(e.message):(LidyaPos.showSuccess(e.message),window.location.reload()),t.removeClass("button-loading"),$("#remove-theme-modal").modal("hide")},error:function(e){LidyaPos.handleError(e),t.removeClass("button-loading"),$("#remove-theme-modal").modal("hide")}})}))}}])&&e(o.prototype,n),t}();$(document).ready((function(){(new t).init()}))})();
