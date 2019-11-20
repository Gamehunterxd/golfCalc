$(document).ready(function() {

    $("input").change(function(){
        let total = 0;
        $("input[name=hole]").each(function(){
            total = total + parseInt($(this).val());
        });
        $("input[name=total]").val(total);
    })
});