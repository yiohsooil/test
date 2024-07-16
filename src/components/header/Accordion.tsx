/** @jsxImportSource @emotion/react */
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MenuProps } from '../../types';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import useAccordionsExpanded from '../../store/accordionsStore';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: 0,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
}));

interface CustomizedAccordionsProps extends MenuProps {
  panelString: string;
  isSub?: boolean;
  onClick?: () => void;
}

export default function CustomizedAccordion({
  name,
  subMenu,
  panelString,
  isSub = false,
  onClick,
}: CustomizedAccordionsProps) {
  const { expanded, setExpanded } = useAccordionsExpanded();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleIsSub = () => {
    setExpanded(false);
    onClick && onClick();
  };

  return (
    <div css={accordionContainerStyle(isSub)}>
      <Accordion
        expanded={expanded === panelString}
        onChange={handleChange(panelString)}
      >
        <AccordionSummary
          aria-controls={`${panelString}-content`}
          id={`${panelString}-header`}
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails css={accordionDetailsStyle(isSub)}>
          {subMenu &&
            subMenu.map((subMenuItem, index) => (
              <Link
                to={subMenuItem.link}
                key={index}
                css={subMenuItemStyle}
                onClick={handleIsSub}
              >
                <div css={subMenuNameStyle(isSub)}>
                  {subMenuItem.subMenuName}
                </div>
              </Link>
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const accordionContainerStyle = (isSub: boolean) => css`
  border: ${isSub ? '1px solid #ccc' : 'none'};

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }
`;

const accordionDetailsStyle = (isSub: boolean) => css`
  padding: ${isSub ? '0' : '0 2rem 1rem 2rem'};
`;

const subMenuItemStyle = css`
  color: #222;
  font-size: 14px;
  text-decoration: none;
`;

const subMenuNameStyle = (isSub: boolean) => css`
  padding: 1rem;
  &:hover {
    background-color: #f5f5f5;
  }

  // sub
  text-align: ${isSub ? 'center' : 'left'};
  border-top: ${isSub ? '1px solid #ccc' : 'none'};
`;
