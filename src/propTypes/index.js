import { PropTypes } from 'react'

export const EnvironmentPropTypes = PropTypes.shape({
  type: PropTypes.string.isRequired,
  value: PropTypes.string
})

export const PositionPropTypes = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
})

export const PrimitivePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
})

export const SizePropTypes = PropTypes.shape({
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
})

export const SlotPropTypes = PropTypes.objectOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  }).isRequired
)
