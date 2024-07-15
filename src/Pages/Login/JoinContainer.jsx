import React from 'react';

import JoinPresenter from './JoinPresenter';
import { useForm } from 'react-hook-form';


const JoinContainer = () => {

    const { register } = useForm()

    return (
        <JoinPresenter />
    );
};

export default JoinContainer;