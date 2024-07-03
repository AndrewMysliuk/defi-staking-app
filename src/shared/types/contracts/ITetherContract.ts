export interface ITetherContract {
  contractName: string
  abi: Abi[]
  metadata: string
  bytecode: string
  deployedBytecode: string
  sourceMap: string
  deployedSourceMap: string
  source: string
  sourcePath: string
  ast: Ast
  legacyAST: LegacyAst
  compiler: Compiler
  networks: Networks
  schemaVersion: string
  updatedAt: string
  networkType: string
  devdoc: Devdoc
  userdoc: Userdoc
}

export interface Abi {
  inputs: Input[]
  payable?: boolean
  stateMutability?: string
  type: string
  anonymous?: boolean
  name?: string
  constant?: boolean
  outputs?: Output[]
}

export interface Input {
  indexed?: boolean
  internalType: string
  name: string
  type: string
}

export interface Output {
  internalType: string
  name: string
  type: string
}

export interface Ast {
  absolutePath: string
  exportedSymbols: ExportedSymbols
  id: number
  nodeType: string
  nodes: Node[]
  src: string
}

export interface ExportedSymbols {
  Tether: number[]
}

export interface Node {
  id: number
  literals?: string[]
  nodeType: string
  src: string
  baseContracts?: any[]
  contractDependencies?: any[]
  contractKind?: string
  documentation: any
  fullyImplemented?: boolean
  linearizedBaseContracts?: number[]
  name?: string
  nodes?: Node2[]
  scope?: number
}

export interface Node2 {
  constant?: boolean
  id: number
  name: string
  nodeType: string
  scope?: number
  src: string
  stateVariable?: boolean
  storageLocation?: string
  typeDescriptions?: TypeDescriptions
  typeName?: TypeName
  value?: Value
  visibility?: string
  anonymous?: boolean
  documentation: any
  parameters?: Parameters
  body?: Body
  implemented?: boolean
  kind?: string
  modifiers?: any[]
  returnParameters?: ReturnParameters
  stateMutability?: string
  superFunction: any
}

export interface TypeDescriptions {
  typeIdentifier: string
  typeString: string
}

export interface TypeName {
  id: number
  keyType?: KeyType
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions3
  valueType?: ValueType
  name?: string
}

export interface KeyType {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions2
}

export interface TypeDescriptions2 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions3 {
  typeIdentifier: string
  typeString: string
}

export interface ValueType {
  id: number
  keyType?: KeyType2
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions5
  valueType?: ValueType2
  name?: string
}

export interface KeyType2 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions4
}

export interface TypeDescriptions4 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions5 {
  typeIdentifier: string
  typeString: string
}

export interface ValueType2 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions6
}

export interface TypeDescriptions6 {
  typeIdentifier: string
  typeString: string
}

export interface Value {
  argumentTypes: any
  hexValue: string
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  nodeType: string
  src: string
  subdenomination: any
  typeDescriptions: TypeDescriptions7
  value: string
}

export interface TypeDescriptions7 {
  typeIdentifier: string
  typeString: string
}

export interface Parameters {
  id: number
  nodeType: string
  parameters: Parameter[]
  src: string
}

export interface Parameter {
  constant: boolean
  id: number
  indexed?: boolean
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions8
  typeName: TypeName2
  value: any
  visibility: string
}

export interface TypeDescriptions8 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName2 {
  id: number
  name: string
  nodeType: string
  src: string
  stateMutability?: string
  typeDescriptions: TypeDescriptions9
}

export interface TypeDescriptions9 {
  typeIdentifier: string
  typeString: string
}

export interface Body {
  id: number
  nodeType: string
  src: string
  statements: Statement[]
}

export interface Statement {
  expression?: Expression
  id: number
  nodeType: string
  src: string
  eventCall?: EventCall
  functionReturnParameters?: number
}

export interface Expression {
  argumentTypes: any
  hexValue?: string
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind?: string
  lValueRequested: boolean
  nodeType: string
  src: string
  subdenomination: any
  typeDescriptions: TypeDescriptions10
  value?: string
  arguments?: Argument[]
  expression?: Expression4
  names?: any[]
  leftHandSide?: LeftHandSide
  operator?: string
  rightHandSide?: RightHandSide
}

export interface TypeDescriptions10 {
  typeIdentifier: string
  typeString: string
}

export interface Argument {
  argumentTypes: any
  commonType?: CommonType
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  leftExpression?: LeftExpression
  nodeType: string
  operator?: string
  rightExpression?: RightExpression
  src: string
  typeDescriptions: TypeDescriptions21
  hexValue?: string
  kind?: string
  subdenomination: any
  value?: string
}

export interface CommonType {
  typeIdentifier: string
  typeString: string
}

export interface LeftExpression {
  argumentTypes: any
  baseExpression?: BaseExpression
  id: number
  indexExpression?: IndexExpression
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions14
  name?: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
}

export interface BaseExpression {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions11
}

export interface TypeDescriptions11 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression {
  argumentTypes: any
  expression: Expression2
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions13
}

export interface Expression2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions12
}

export interface TypeDescriptions12 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions13 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions14 {
  typeIdentifier: string
  typeString: string
}

export interface RightExpression {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions15
  baseExpression?: BaseExpression2
  indexExpression?: IndexExpression3
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
}

export interface TypeDescriptions15 {
  typeIdentifier: string
  typeString: string
}

export interface BaseExpression2 {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions16
  baseExpression?: BaseExpression3
  indexExpression?: IndexExpression2
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
}

export interface TypeDescriptions16 {
  typeIdentifier: string
  typeString: string
}

export interface BaseExpression3 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions17
}

export interface TypeDescriptions17 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions18
}

export interface TypeDescriptions18 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression3 {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions19
  expression?: Expression3
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
}

export interface TypeDescriptions19 {
  typeIdentifier: string
  typeString: string
}

export interface Expression3 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions20
}

export interface TypeDescriptions20 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions21 {
  typeIdentifier: string
  typeString: string
}

export interface Expression4 {
  argumentTypes: ArgumentType[]
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: number[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions22
}

export interface ArgumentType {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions22 {
  typeIdentifier: string
  typeString: string
}

export interface LeftHandSide {
  argumentTypes: any
  baseExpression: BaseExpression4
  id: number
  indexExpression: IndexExpression5
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions29
}

export interface BaseExpression4 {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions23
  baseExpression?: BaseExpression5
  indexExpression?: IndexExpression4
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
}

export interface TypeDescriptions23 {
  typeIdentifier: string
  typeString: string
}

export interface BaseExpression5 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions24
}

export interface TypeDescriptions24 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression4 {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions25
  expression?: Expression5
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
}

export interface TypeDescriptions25 {
  typeIdentifier: string
  typeString: string
}

export interface Expression5 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions26
}

export interface TypeDescriptions26 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression5 {
  argumentTypes: any
  expression?: Expression6
  id: number
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
  nodeType: string
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions28
  name?: string
  overloadedDeclarations?: any[]
}

export interface Expression6 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions27
}

export interface TypeDescriptions27 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions28 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions29 {
  typeIdentifier: string
  typeString: string
}

export interface RightHandSide {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions30
}

export interface TypeDescriptions30 {
  typeIdentifier: string
  typeString: string
}

export interface EventCall {
  argumentTypes: any
  arguments: Argument2[]
  expression: Expression8
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  names: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions34
}

export interface Argument2 {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions31
  expression?: Expression7
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
}

export interface TypeDescriptions31 {
  typeIdentifier: string
  typeString: string
}

export interface Expression7 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions32
}

export interface TypeDescriptions32 {
  typeIdentifier: string
  typeString: string
}

export interface Expression8 {
  argumentTypes: ArgumentType2[]
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions33
}

export interface ArgumentType2 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions33 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions34 {
  typeIdentifier: string
  typeString: string
}

export interface ReturnParameters {
  id: number
  nodeType: string
  parameters: Parameter2[]
  src: string
}

export interface Parameter2 {
  constant: boolean
  id: number
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions35
  typeName: TypeName3
  value: any
  visibility: string
}

export interface TypeDescriptions35 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName3 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions36
}

export interface TypeDescriptions36 {
  typeIdentifier: string
  typeString: string
}

export interface LegacyAst {
  attributes: Attributes
  children: Children[]
  id: number
  name: string
  src: string
}

export interface Attributes {
  absolutePath: string
  exportedSymbols: ExportedSymbols2
}

export interface ExportedSymbols2 {
  Tether: number[]
}

export interface Children {
  attributes: Attributes2
  id: number
  name: string
  src: string
  children?: Children2[]
}

export interface Attributes2 {
  literals?: string[]
  baseContracts?: any[]
  contractDependencies?: any[]
  contractKind?: string
  documentation: any
  fullyImplemented?: boolean
  linearizedBaseContracts?: number[]
  name?: string
  scope?: number
}

export interface Children2 {
  attributes: Attributes3
  children: Children3[]
  id: number
  name: string
  src: string
}

export interface Attributes3 {
  constant?: boolean
  name: string
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  type?: string
  visibility?: string
  anonymous?: boolean
  documentation: any
  value: any
  implemented?: boolean
  isConstructor?: boolean
  kind?: string
  modifiers?: any[]
  stateMutability?: string
  superFunction: any
}

export interface Children3 {
  children?: Children4[]
  id: number
  name: string
  src: string
  attributes?: Attributes10
}

export interface Children4 {
  attributes?: Attributes4
  children?: Children5[]
  id: number
  name: string
  src: string
}

export interface Attributes4 {
  name?: string
  type?: string
  constant?: boolean
  indexed?: boolean
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  value: any
  visibility?: string
  functionReturnParameters?: number
}

export interface Children5 {
  attributes: Attributes5
  id: number
  name: string
  src: string
  children?: Children6[]
}

export interface Attributes5 {
  name?: string
  type: string
  stateMutability?: string
  argumentTypes: any
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  isStructConstructorCall?: boolean
  lValueRequested?: boolean
  names?: any[]
  type_conversion?: boolean
  operator?: string
  hexvalue?: string
  subdenomination: any
  token?: string
  value?: string
}

export interface Children6 {
  attributes: Attributes6
  id: number
  name: string
  src: string
  children?: Children7[]
}

export interface Attributes6 {
  argumentTypes?: ArgumentType3[]
  overloadedDeclarations?: number | undefined[]
  referencedDeclaration?: number
  type: string
  value?: string
  commonType?: CommonType2
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  operator?: string
  hexvalue?: string
  subdenomination: any
  token?: string
  member_name?: string
}

export interface ArgumentType3 {
  typeIdentifier: string
  typeString: string
}

export interface CommonType2 {
  typeIdentifier: string
  typeString: string
}

export interface Children7 {
  attributes: Attributes7
  id: number
  name: string
  src: string
  children?: Children8[]
}

export interface Attributes7 {
  argumentTypes: any
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  member_name?: string
}

export interface Children8 {
  attributes: Attributes8
  id: number
  name: string
  src: string
  children?: Children9[]
}

export interface Attributes8 {
  argumentTypes: any
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  member_name?: string
}

export interface Children9 {
  attributes: Attributes9
  id: number
  name: string
  src: string
}

export interface Attributes9 {
  argumentTypes: any
  overloadedDeclarations: any[]
  referencedDeclaration: number
  type: string
  value: string
}

export interface Attributes10 {
  parameters?: any[]
  type?: string
  name?: string
  argumentTypes: any
  hexvalue?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  subdenomination: any
  token?: string
  value?: string
}

export interface Compiler {
  name: string
  version: string
}

export interface Networks {
  [key: string]: NetworkData
}

export interface NetworkData {
  events: Events
  links: Links
  address: string
  transactionHash: string
}

export interface Events {
  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": N0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": N0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
}

export interface N0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925 {
  anonymous: boolean
  inputs: Input2[]
  name: string
  type: string
}

export interface Input2 {
  indexed: boolean
  internalType: string
  name: string
  type: string
}

export interface N0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef {
  anonymous: boolean
  inputs: Input3[]
  name: string
  type: string
}

export interface Input3 {
  indexed: boolean
  internalType: string
  name: string
  type: string
}

export interface Links {}

export interface Devdoc {
  methods: Methods
}

export interface Methods {}

export interface Userdoc {
  methods: Methods2
}

export interface Methods2 {}
