import { PropTypes } from 'react'

export const PositionPropTypes = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
})

export const SizePropTypes = PropTypes.shape({
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
})

export const SlotPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
)
