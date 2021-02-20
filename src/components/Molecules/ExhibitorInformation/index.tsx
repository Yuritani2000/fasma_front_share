import React from 'react';
import { Parent, Container, FlexBox, ContactAreaParent, ContactTextStyle, ContactItemStyle } from './StyledComponents/StyledComponents';
import Text from './MockAtoms/Text';

export type ExhibitorInformationProps = {
    exhibitorName: string;
    hasGmailAddress: boolean;
    hasFunMailAddress: boolean;
    hasOtherMailAddress: boolean;
    hasLineQrCord: boolean;
}

const ExhibitorInformation: React.FC<ExhibitorInformationProps> = (props) => {
    const {
        exhibitorName, 
        hasGmailAddress,
        hasFunMailAddress,
        hasOtherMailAddress,
        hasLineQrCord,
    } = props;

    return (
        <Parent>
            <Container>
                <Text isBold={true} children='出品者プロフィール' textType='Default' size='Large'/>
                <Text isBold={false} children={exhibitorName} textType='Default' size='Small'/>
                <ContactAreaParent>
                    <FlexBox flexDirection='column'>
                        <ContactTextStyle>
                            <Text isBold={false} children='登録済みの連絡先' textType='Default' size='Small'/>
                        </ContactTextStyle>
                        <FlexBox>
                            <ContactItemStyle isVisible={hasGmailAddress}>
                                <Text isBold={false} children='Gmail' textType='Default' size='Small'/>
                            </ContactItemStyle>
                            <ContactItemStyle isVisible={hasFunMailAddress}>
                                <Text isBold={false} children='学内メール' textType='Default' size='Small'/>
                            </ContactItemStyle>
                            <ContactItemStyle isVisible={hasOtherMailAddress}>
                                <Text isBold={false} children='その他のメール' textType='Default' size='Small'/>
                            </ContactItemStyle>
                            <ContactItemStyle isVisible={hasLineQrCord}>
                                <Text isBold={false} children='LINE' textType='Default' size='Small'/>
                            </ContactItemStyle>
                        </FlexBox>
                    </FlexBox>
                </ContactAreaParent>
            </Container>
        </Parent>
    );
}

export default ExhibitorInformation;