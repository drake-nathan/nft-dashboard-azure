import type { AzureFunction, Context } from '@azure/functions';

const timerTrigger: AzureFunction = async (
  context: Context,
  myTimer: any,
): Promise<void> => {
  const timeStamp = new Date().toISOString();

  if (myTimer.isPastDue) {
    context.log('Timer function is running late!');
  }
  context.log('Timer trigger function ran!', timeStamp);
};

export default timerTrigger;
