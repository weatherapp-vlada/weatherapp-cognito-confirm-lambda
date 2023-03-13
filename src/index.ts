import {
  Callback,
  Context,
  Handler,
  PostConfirmationConfirmSignUpTriggerEvent,
} from "aws-lambda";

const baseUrl = process.env.BASE_URL;

export const handler: Handler<PostConfirmationConfirmSignUpTriggerEvent> = (
  event: PostConfirmationConfirmSignUpTriggerEvent,
  context: Context,
  callback: Callback
): void => {
  if (event.triggerSource !== "PostConfirmation_ConfirmSignUp") {
    callback(null, event);
    return;
  }

  console.log(JSON.stringify(event));

  callback(null, event);
};
