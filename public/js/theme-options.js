$(document).ready((function(){$(document).find(".colorpicker-input").length>0&&$(document).find(".colorpicker-input").colorpicker(),$(document).find(".iconpicker-input").length>0&&$(document).find(".iconpicker-input").iconpicker({selected:!0,hideOnSelect:!0}),$(document).ready((function(){$(document).on("click",".button-save-theme-options",(function(e){e.preventDefault();var t=$(e.currentTarget);if(t.addClass("button-loading"),"undefined"!=typeof tinymce)for(var n in tinymce.editors)tinymce.editors[n].getContent&&$("#"+n).html(tinymce.editors[n].getContent());var o=t.closest("form");$.ajax({url:o.prop("action"),type:"POST",data:o.serialize(),success:function(e){t.removeClass("button-loading"),e.error?LidyaPos.showError(e.message):(LidyaPos.showSuccess(e.message),o.removeClass("dirty"))},error:function(e){t.removeClass("button-loading"),LidyaPos.handleError(e)}})}))}))}));
