import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useLineAccess from '../hooks/useLineAccess';

const RedirectPage = (props) => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code") || '';
    const {lineAccess, setLineAccess} = useLineAccess(code);

    return <>ちょっと待てくださいよ。。。</>;
};

export default React.memo(RedirectPage);
