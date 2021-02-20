function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function close_notif(textdivid){
     document.getElementById(textdivid).remove();
 }
 function send_notify(title, msg, textinfo){
     if (textinfo == 'error'){
     var randid = makeid(6);
     var notification_error = `
     <div class="notify error" id="`+randid+`">
         <div class="notify__error">
         <div class="notify__icon">
             <i class="fa fa-ban"></i>
         </div>
         <div class="notify__">
             <div class="notify__title">
                 `+title+`
             </div>
             <div class="notify_close">
                 <a class="notify__close__btn" onclick="close_notif('`+randid+`');" style="cursor:pointer;"><i class="fa fa-times" aria-hidden="true"></i></a>
             </div>
         </div>
             <div class="notify__message">
                 `+msg+`
             </div>
         </div>
     </div>
     `;
     }
     if (textinfo == 'success'){
     var randid = makeid(6);
     var notification_error = `
     <div class="notify success" id="`+randid+`">
         <div class="notify__error">
         <div class="notify__icon">
             <i class="fa fa-check"></i>
         </div>
         <div class="notify__">
             <div class="notify__title">
                 `+title+`
             </div>
             <div class="notify_close">
                 <a class="notify__close__btn" onclick="close_notif('`+randid+`');" style="cursor:pointer;"><i class="fa fa-times" aria-hidden="true"></i></a>
             </div>
         </div>
             <div class="notify__message">
                 `+msg+`
             </div>
         </div>
     </div>
     `;
     }
     if (textinfo == 'info'){
     var randid = makeid(6);
     var notification_error = `
     <div class="notify info" id="`+randid+`">
         <div class="notify__error">
         <div class="notify__icon">
             <i class="fa fa-exclamation-triangle"></i>
         </div>
         <div class="notify__">
             <div class="notify__title">
                 `+title+`
             </div>
             <div class="notify_close">
                 <a class="notify__close__btn" onclick="close_notif('`+randid+`');" style="cursor:pointer;"><i class="fa fa-times" aria-hidden="true"></i></a>
             </div>
         </div>
             <div class="notify__message">
                 `+msg+`
             </div>
         </div>
     </div>
     `;
     }
     if (document.getElementById('notifications').innerHTML !== ''){
         document.getElementById('notifications').innerHTML = '';
     } 
     document.getElementById('notifications').innerHTML = document.getElementById('notifications').innerHTML + notification_error;
 }
 setTimeout(send_notify,1000,'Register', 'Register unsuccess', 'error');setTimeout(send_notify,5000,'Register', 'Register success', 'success');
 setTimeout(send_notify,10000,'Register', 'Register info', 'info');
 
 send_notify('Ошибка!','Не удалось получить данные!','error')
 
 