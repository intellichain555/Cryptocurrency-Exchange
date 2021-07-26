import {SvgIcon} from "@material-ui/core";

function SlideLeftIcon(props) {
  return (
    <SvgIcon { ...props }>
      <path d="M22 12H3" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 4H13" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.301406" d="M22 20H13" stroke="#808191" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M7 7L2 12L7 17" stroke={props.color} fill={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
  )
}

export default SlideLeftIcon
