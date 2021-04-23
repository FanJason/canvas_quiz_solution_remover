chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            // quiz header metafields
            $(".user_points").text("NA");
            $(".quiz_duration").remove();
            $(":contains(Submitted)").last().remove();
            $(".quiz_score").remove();
            $("#quiz-submission-version-table").remove();

            // submission details
            $("#right-side-wrapper").remove();
            
            // quiz warnings, ex: quiz has been re-graded
            $(".ui-state-warning").remove();

            // right / wrong answer markers
            $(".answer_arrow").remove();
            $(".wrong_answer").removeClass("wrong_answer");

            // T/F + multiple choice selections
            $(".question_input").removeAttr("checked");
            $(".answer").addClass("correct_answer");

            // numerical answers
            $(".numerical_question_input").attr("value", "");
            $(".numerical_exact_answer").remove();
            
            // written answers
            $(".quiz_response_text").remove();
        }
    }
);