import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Container, Typography, Box } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
  pricingModel: PricingModel;
}

enum PricingModel {
  Freemium = "Freemium",
  Subscription = "Subscription",
  PayPerUse = "Pay Per Use"
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An unexpected error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Create Business Specification
        </Typography>

        {error && (
          <Box sx={{ mb: 2, color: 'red' }}>
            <Typography>{error}</Typography>
          </Box>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
              minLength: { value: 3, message: "Name must be at least 3 characters long" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{
              required: true,
              minLength: { value: 10, message: "Description must be at least 10 characters long" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                error={!!errors.description}
                helperText={errors.description?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="features"
            control={control}
            rules={{
              required: true,
              minLength: { value: 1, message: "At least one feature is required" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Features (comma-separated)"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.features}
                helperText={errors.features?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="pricingModel"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Pricing Model"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.pricingModel}
                helperText={errors.pricingModel?.message as string | undefined}
              >
                {Object.values(PricingModel).map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </TextField>
            )}
          />

          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                "Create Specification"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Container, Typography, Box } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
  pricingModel: PricingModel;
}

enum PricingModel {
  Freemium = "Freemium",
  Subscription = "Subscription",
  PayPerUse = "Pay Per Use"
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An unexpected error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Create Business Specification
        </Typography>

        {error && (
          <Box sx={{ mb: 2, color: 'red' }}>
            <Typography>{error}</Typography>
          </Box>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
              minLength: { value: 3, message: "Name must be at least 3 characters long" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{
              required: true,
              minLength: { value: 10, message: "Description must be at least 10 characters long" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                error={!!errors.description}
                helperText={errors.description?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="features"
            control={control}
            rules={{
              required: true,
              minLength: { value: 1, message: "At least one feature is required" }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Features (comma-separated)"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.features}
                helperText={errors.features?.message as string | undefined}
              />
            )}
          />

          <Controller
            name="pricingModel"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Pricing Model"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.pricingModel}
                helperText={errors.pricingModel?.message as string | undefined}
              >
                {Object.values(PricingModel).map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </TextField>
            )}
          />

          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                "Create Specification"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBusinessSpecification;