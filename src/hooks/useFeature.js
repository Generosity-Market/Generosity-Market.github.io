import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFeature = (param) => {
    const [searchParams] = useSearchParams();
    const _param = searchParams.get(param);

    const isEnabled = useRef(null);

    useEffect(() => {
        if (_param === 'true') {
            isEnabled.current = true;
        } else if (_param === '' || _param === 'false') {
            isEnabled.current = null;
        }
    });

    return [isEnabled?.current];
};

export default useFeature;