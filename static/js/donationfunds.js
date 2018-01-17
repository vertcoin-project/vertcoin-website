$(function(){
    console.log("Hallo!");
    if($('.donationGoal').length > 0) {
        $('.donationGoal').each(function() {
            var goalObj = $(this);
            var address = goalObj.attr('data-address');
            var goal = parseInt(goalObj.attr('data-goal'));
            $.get('https://vtc.blkidx.org/addressBalance/' + address, function(data) { 
                var vtcBalance = Math.round(parseInt(data)/1000000);
                vtcBalance /= 100;
                
                var goalPercentage = 100;
                if(!isNaN(goal)) {
                    goalPercentage = Math.round(vtcBalance/goal* 100) ;
                    if(goalPercentage > 100) goalPercentage = 100;
                }
     

                goalObj.find('.progress-bar').css('width', goalPercentage + '%');
                goalObj.find('.progress-bar').attr('aria-valuenow' ,  goalPercentage);

                goalObj.find('.donationAmount').text(vtcBalance);
            })
        });
    }
});