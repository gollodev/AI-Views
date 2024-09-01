$(document).ready(function () {
  $('#chat-btn').click(function () {
    $('#chat-float').toggleClass('chat-form-show');
  });

  $('.close-btn').click(function () {
    $('#chat-float').toggleClass('chat-form-show');
  });

  $('.next-btn').on('click', function () {
    const currentStep = $(this).closest('.form-step');
    const nextStep = currentStep.next('.form-step');

    if (nextStep.length) {
      currentStep.hide();
      nextStep.show();
    }
  });
});
