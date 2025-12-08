import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  requirementType: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirementsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <StyledGatherRequirements>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="requirements">Enter Requirements</label>
          <textarea
            id="requirements"
            {...register('requirements', {
              required: 'Requirements are required',
              validate: (value) => value.length > 0 || 'Please provide at least one requirement'
            })}
          />
          {errors.requirements && (
            <p role="alert" aria-live="assertive">{errors.requirements.message}</p>
          )}
        </div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </StyledGatherRequirements>
  );
};

const StyledGatherRequirements = styled.div`
  ${tw`bg-white p-6 rounded-lg shadow-md`}
`;

export default GatherRequirementsComponent;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  requirementType: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirementsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <StyledGatherRequirements>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="requirements">Enter Requirements</label>
          <textarea
            id="requirements"
            {...register('requirements', {
              required: 'Requirements are required',
              validate: (value) => value.length > 0 || 'Please provide at least one requirement'
            })}
          />
          {errors.requirements && (
            <p role="alert" aria-live="assertive">{errors.requirements.message}</p>
          )}
        </div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </StyledGatherRequirements>
  );
};

const StyledGatherRequirements = styled.div`
  ${tw`bg-white p-6 rounded-lg shadow-md`}
`;

export default GatherRequirementsComponent;