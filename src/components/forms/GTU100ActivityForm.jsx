import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const GTU100ActivityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showTerms, setShowTerms] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);

  const submitHandler = (data) => {
    console.log('Submitted Data:', data);
  };

  const validationSchema = {
    enrollmentValidator: {
      required: { value: true, message: 'Enrollment Number is required' },
    },
    passwordValidator: {
      required: { value: true, message: 'Password is required' },
    },
    currentPointsValidator: {
      required: { value: true, message: 'Current points are required' },
      min: { value: 0, message: 'Points cannot be negative' },
    },
    fullNameValidator: {
      required: { value: true, message: 'Full name is required' },
    },
    collegeNameValidator: {
      required: { value: true, message: 'College name is required' },
    },
    whatsappValidator: {
      required: { value: true, message: 'WhatsApp number is required' },
      pattern: { value: /^[0-9]{10}$/, message: 'Invalid WhatsApp number' },
    },
    termsValidator: {
      required: { value: true, message: 'You must agree to the terms' },
    },
    declarationValidator: {
      required: { value: true, message: 'You must agree to the declaration' },
    },
    paymentProofValidator: {
      required: { value: true, message: 'Payment proof is required' },
    },
    confirmationValidator: {
      required: { value: true, message: 'You must confirm submission' },
    },
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/1175481.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>
        100 Activity Points Certificates Form
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.7)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        {/* Enrollment Number */}
        <div style={{ marginBottom: '15px' }}>
          <label>Enrollment Number</label>
          <input
            type="text"
            placeholder="Enter your Enrollment Number"
            {...register(
              'enrollmentNumber',
              validationSchema.enrollmentValidator,
            )}
          />
          <span style={{ color: 'red' }}>
            {errors.enrollmentNumber?.message}
          </span>
        </div>

        {/* Portal Password */}
        <div style={{ marginBottom: '15px' }}>
          <label>100 Activity Portal Password</label>
          <input
            type="password"
            placeholder="Enter your portal password"
            {...register('portalPassword', validationSchema.passwordValidator)}
          />
          <span style={{ color: 'red' }}>{errors.portalPassword?.message}</span>
        </div>

        {/* Current Points */}
        <div style={{ marginBottom: '15px' }}>
          <label>Current Points</label>
          <input
            type="number"
            placeholder="Enter your current points"
            {...register(
              'currentPoints',
              validationSchema.currentPointsValidator,
            )}
          />
          <span style={{ color: 'red' }}>{errors.currentPoints?.message}</span>
        </div>

        {/* Full Name */}
        <div style={{ marginBottom: '15px' }}>
          <label>Name of Student</label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register('fullName', validationSchema.fullNameValidator)}
          />
          <span style={{ color: 'red' }}>{errors.fullName?.message}</span>
        </div>

        {/* College Name */}
        <div style={{ marginBottom: '15px' }}>
          <label>College Full Name</label>
          <input
            type="text"
            placeholder="Enter your college name"
            {...register('collegeName', validationSchema.collegeNameValidator)}
          />
          <span style={{ color: 'red' }}>{errors.collegeName?.message}</span>
        </div>

        {/* WhatsApp Number */}
        <div style={{ marginBottom: '15px' }}>
          <label>WhatsApp Number</label>
          <input
            type="tel"
            placeholder="Enter your WhatsApp number"
            {...register('whatsappNumber', validationSchema.whatsappValidator)}
          />
          <span style={{ color: 'red' }}>{errors.whatsappNumber?.message}</span>
        </div>

        {/* Semester */}
        <div style={{ marginBottom: '15px' }}>
          <label>Semester</label>
          <select {...register('semester')}>
            <option value="SEM 1">SEM 1</option>
            <option value="SEM 2">SEM 2</option>
            <option value="SEM 3">SEM 3</option>
            <option value="SEM 4">SEM 4</option>
            <option value="SEM 5">SEM 5</option>
            <option value="SEM 6">SEM 6</option>
            <option value="SEM 7">SEM 7</option>
            <option value="SEM 8">SEM 8</option>
          </select>
        </div>

        {/* Branch */}
        <div style={{ marginBottom: '15px' }}>
          <label>Branch</label>
          <select {...register('branch')}>
            <option value="IT">IT</option>
            <option value="CSE/CE">CSE/CE</option>
            <option value="Civil">Civil</option>
            <option value="Mechanical">Mechanical</option>
            <option value="EC">EC</option>
            <option value="Automobile">Automobile</option>
            <option value="Electrical">Electrical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Terms & Conditions */}
        <div
          style={{
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <input
              type="checkbox"
              {...register('termsConditions', validationSchema.termsValidator)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowTerms(!showTerms)}
              style={{ marginBottom: '8px' }}
            >
              {showTerms ? 'Hide' : 'Show'} Terms & Conditions
            </button>
            {showTerms && (
              <div style={{ marginTop: '8px' }}>
                1. Refund Policy: Refund is applicable only if 3 or more of our
                activities are rejected and your 100 points are not completed.
                <br />
                2. Certificate Submission: It is the participant's
                responsibility to submit the certificates to the college for
                cross-verification.
                <br />
                3. Refund Eligibility: Non-submission of certificates makes you
                ineligible for a refund.
                <br />
                4. Activity Completion: We ensure activities to complete 100
                points.
                <br />
                5. Payment Verification: Payment proof is required.
                <br />
                6. Payment Proof: Save your payment proof to avoid losing our
                service.
              </div>
            )}
            <span style={{ color: 'red' }}>
              {errors.termsConditions?.message}
            </span>
          </div>
        </div>

        {/* Declaration */}
        <div
          style={{
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <input
              type="checkbox"
              {...register(
                'declaration',
                validationSchema.declarationValidator,
              )}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowDeclaration(!showDeclaration)}
              style={{ marginBottom: '8px' }}
            >
              {showDeclaration ? 'Hide' : 'Show'} Declaration
            </button>
            {showDeclaration && (
              <div style={{ marginTop: '8px' }}>
                Declaration: I hereby declare that I have read, understood, and
                agreed to the Terms and Conditions regarding the refund policy
                and completion of 100 activity points. I understand that it is
                my responsibility to submit the certificates to the college for
                cross-verification to secure the points.
              </div>
            )}
            <span style={{ color: 'red' }}>{errors.declaration?.message}</span>
          </div>
        </div>

        {/* Payment Proof */}
        <div
          style={{
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <label>Payment Proof:</label>
          </div>
          <div>
            <input
              type="file"
              {...register(
                'paymentProof',
                validationSchema.paymentProofValidator,
              )}
            />
            <span style={{ color: 'red' }}>{errors.paymentProof?.message}</span>
          </div>
        </div>

        {/* Confirmation */}
        <div
          style={{
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <input
              type="checkbox"
              {...register(
                'confirmationMessage',
                validationSchema.confirmationValidator,
              )}
            />
          </div>
          <div>
            Yes, I'll send the message to confirm.
            <span style={{ color: 'red' }}>
              {errors.confirmationMessage?.message}
            </span>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          />
        </div>
      </form>
    </div>
  );
};
