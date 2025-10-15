import { CircleItem } from '../../components/circleItem/CircleItem';
import { ArcherContainer, ArcherElement } from 'react-archer';
import { ROUTES } from '../../routes/routhPath';
import { Typography, Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import s from './AboutOurProject.module.scss';
import React from 'react';

const { Title, Paragraph } = Typography;

export const AboutOurProject: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.aboutPage}>
      <ArcherContainer strokeColor="black" strokeWidth={2}>
        <div className={s.aboutContainer}>
          <Space direction="vertical">
            <Card className="about-card">
              <Title level={2}>What We Do</Title>
              <Paragraph>
                This project is an interactive platform for managing avatars and
                blocks. It allows users to create, edit, and delete avatars, as
                well as manage blocks containing information or content.
              </Paragraph>
            </Card>

            <Card className={s.aboutCard}>
              <Title level={2}>How We Do</Title>
              <Paragraph>
                <ArcherElement
                  id="avatars"
                  relations={[
                    {
                      targetId: 'targetAvatar',
                      targetAnchor: 'top',
                      sourceAnchor: 'bottom',
                    },
                  ]}
                >
                  <span>
                    <b>Avatars:</b> Users can create new avatars and set their
                    parameters. Existing avatars can be edited at any time.
                    Avatars can be deleted individually or in bulk. Avatars are
                    displayed on the main page with a visual card showing their
                    role, gender, and other information.
                  </span>
                </ArcherElement>

                <br />

                <ArcherElement
                  id="blocks"
                  relations={[
                    {
                      targetId: 'targetBlock',
                      targetAnchor: 'top',
                      sourceAnchor: 'bottom',
                    },
                  ]}
                >
                  <span>
                    <b>Blocks:</b> Blocks are separate information cards
                    connected to avatars or content. On a block detail page,
                    users can update content or delete the block entirely. The
                    system supports interactive block management via the UI.
                  </span>
                </ArcherElement>
              </Paragraph>
            </Card>
          </Space>

          <div style={{ display: 'flex', gap: '100px', marginTop: '150px' }}>
            <ArcherElement id="targetAvatar">
              <div onClick={() => navigate(ROUTES.HOME_PATH)}>
                <CircleItem idx={1} item="+" />
              </div>
            </ArcherElement>

            <ArcherElement id="targetBlock">
              <div className={s.blockType}>Block Target</div>
            </ArcherElement>
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};
