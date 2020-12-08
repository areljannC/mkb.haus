export type KeyboardType = {
  keySwitch: KeySwitchType
  keyCap: KeyCapType
  layout: LayoutType
  pcb: PCBType
}

export type KeySwitchType = {
  id: number
  name: string,
  type: string,
  accentuationForce: string
}

export type KeyCapType = {
  id: number
  name: string
}

export type LayoutType = {
  id: number
  name: string
}

export type PCBType = {
  id: number
  name: string
}