import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    try {
      if (!newRequirementName.trim()) return;
      setLoading(true);
      await axios.post('/api/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length.toString(), name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
    } catch (error) {
      console.error('Failed to add new requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = async (requirementId: string) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`);
      setRequirements(requirements.map(req =>
        req.id === requirementId ? { ...req, isCompleted: !req.isCompleted } : req
      ));
    } catch (error) {
      console.error('Failed to toggle requirement completion:', error);
    }
  };

  const deleteRequirement = async (requirementId: string) => {
    try {
      await axios.delete(`/api/requirements/${requirementId}`);
      setRequirements(requirements.filter(req => req.id !== requirementId));
    } catch (error) {
      console.error('Failed to delete requirement:', error);
    }
  };

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>, requirementId: string) => {
    setRequirements(requirements.map(req =>
      req.id === requirementId ? { ...req, description: e.target.value } : req
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <input
        type="text"
        value={newRequirementName}
        onChange={(e) => setNewRequirementName(e.target.value)}
        placeholder="Enter new requirement name..."
        className="border p-2 rounded mb-2 w-full"
        aria-label="Add a new requirement"
        onKeyDown={(event) => {
          if (event.key === 'Enter') addNewRequirement();
        }}
      />
      <button
        onClick={addNewRequirement}
        disabled={!newRequirementName.trim()}
        className={`bg-blue-500 text-white p-2 rounded ${!newRequirementName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Add new requirement"
      >
        Add Requirement
      </button>
      <ul role="list" className="mt-4">
        {requirements.map((requirement) => (
          <li key={requirement.id} className={`mb-2 flex items-center ${requirement.isCompleted ? 'line-through text-gray-500' : ''}`}>
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => toggleRequirementCompletion(requirement.id)}
              aria-label="Toggle requirement completion"
            />
            <div className={`ml-2 flex-grow ${requirement.isCompleted ? 'text-gray-500' : ''}`}>
              <input
                type="text"
                value={requirement.description}
                onChange={(e) => handleRequirementChange(e, requirement.id)}
                placeholder="Enter description..."
                className="border p-1 rounded w-full"
                aria-label={`Edit ${requirement.name} description`}
              />
            </div>
            <button
              onClick={() => deleteRequirement(requirement.id)}
              className="ml-auto text-red-500 hover:text-red-700"
              aria-label="Delete requirement"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('/api/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNewRequirement = async () => {
    try {
      if (!newRequirementName.trim()) return;
      setLoading(true);
      await axios.post('/api/requirements', { name: newRequirementName });
      setRequirements([...requirements, { id: requirements.length.toString(), name: newRequirementName, description: '', isCompleted: false }]);
      setNewRequirementName('');
    } catch (error) {
      console.error('Failed to add new requirement:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = async (requirementId: string) => {
    try {
      await axios.put(`/api/requirements/${requirementId}`);
      setRequirements(requirements.map(req =>
        req.id === requirementId ? { ...req, isCompleted: !req.isCompleted } : req
      ));
    } catch (error) {
      console.error('Failed to toggle requirement completion:', error);
    }
  };

  const deleteRequirement = async (requirementId: string) => {
    try {
      await axios.delete(`/api/requirements/${requirementId}`);
      setRequirements(requirements.filter(req => req.id !== requirementId));
    } catch (error) {
      console.error('Failed to delete requirement:', error);
    }
  };

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>, requirementId: string) => {
    setRequirements(requirements.map(req =>
      req.id === requirementId ? { ...req, description: e.target.value } : req
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <input
        type="text"
        value={newRequirementName}
        onChange={(e) => setNewRequirementName(e.target.value)}
        placeholder="Enter new requirement name..."
        className="border p-2 rounded mb-2 w-full"
        aria-label="Add a new requirement"
        onKeyDown={(event) => {
          if (event.key === 'Enter') addNewRequirement();
        }}
      />
      <button
        onClick={addNewRequirement}
        disabled={!newRequirementName.trim()}
        className={`bg-blue-500 text-white p-2 rounded ${!newRequirementName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Add new requirement"
      >
        Add Requirement
      </button>
      <ul role="list" className="mt-4">
        {requirements.map((requirement) => (
          <li key={requirement.id} className={`mb-2 flex items-center ${requirement.isCompleted ? 'line-through text-gray-500' : ''}`}>
            <input
              type="checkbox"
              checked={requirement.isCompleted}
              onChange={() => toggleRequirementCompletion(requirement.id)}
              aria-label="Toggle requirement completion"
            />
            <div className={`ml-2 flex-grow ${requirement.isCompleted ? 'text-gray-500' : ''}`}>
              <input
                type="text"
                value={requirement.description}
                onChange={(e) => handleRequirementChange(e, requirement.id)}
                placeholder="Enter description..."
                className="border p-1 rounded w-full"
                aria-label={`Edit ${requirement.name} description`}
              />
            </div>
            <button
              onClick={() => deleteRequirement(requirement.id)}
              className="ml-auto text-red-500 hover:text-red-700"
              aria-label="Delete requirement"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;