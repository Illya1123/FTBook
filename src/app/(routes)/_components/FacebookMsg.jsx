'use client';
import { CustomChat, FacebookProvider, MessageUs } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId='468781129173666' chatSupport>
            <CustomChat pageId='343725665480000' minimized={true} />
        </FacebookProvider>
    );
}

export default FacebookMsg;