import { StepActionProps } from '@/types';
import { Button } from '@mui/material';
import React from 'react';

const StepActions = ({ step, prevStep, nextStep }: StepActionProps) => {
  return (
    <div className="flex justify-between">
      <Button onClick={prevStep} disabled={step === 1}>
        Back
      </Button>
      {step === 3 ? (
        <Button type="submit">Sign up</Button>
      ) : (
        <Button onClick={nextStep}>Next</Button>
      )}
    </div>
  );
};

export default StepActions;
