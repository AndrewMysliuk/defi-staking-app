export interface IDecentralBankContract {
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
  internalType: string
  name: string
  type: string
  indexed?: boolean
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
  DecentralBank: number[]
}

export interface Node {
  id: number
  literals?: string[]
  nodeType: string
  src: string
  absolutePath?: string
  file?: string
  scope?: number
  sourceUnit?: number
  symbolAliases?: any[]
  unitAlias?: string
  baseContracts?: any[]
  contractDependencies?: any[]
  contractKind?: string
  documentation: any
  fullyImplemented?: boolean
  linearizedBaseContracts?: number[]
  name?: string
  nodes?: Node2[]
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
  name?: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions2
  stateMutability?: string
  contractScope: any
  referencedDeclaration?: number
  baseType?: BaseType
  length: any
  keyType?: KeyType
  valueType?: ValueType
}

export interface TypeDescriptions2 {
  typeIdentifier: string
  typeString: string
}

export interface BaseType {
  id: number
  name: string
  nodeType: string
  src: string
  stateMutability: string
  typeDescriptions: TypeDescriptions3
}

export interface TypeDescriptions3 {
  typeIdentifier: string
  typeString: string
}

export interface KeyType {
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

export interface ValueType {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions5
}

export interface TypeDescriptions5 {
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
  typeDescriptions: TypeDescriptions6
  value: string
}

export interface TypeDescriptions6 {
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
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions7
  typeName: TypeName2
  value: any
  visibility: string
  indexed?: boolean
}

export interface TypeDescriptions7 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName2 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions8
  contractScope: any
  referencedDeclaration?: number
  stateMutability?: string
}

export interface TypeDescriptions8 {
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
  condition?: Condition
  falseBody: any
  trueBody?: TrueBody
  eventCall?: EventCall
  assignments?: number[]
  declarations?: Declaration[]
  initialValue?: InitialValue
  body?: Body2
  initializationExpression?: InitializationExpression
  loopExpression?: LoopExpression
}

export interface Expression {
  argumentTypes: any
  arguments?: Argument[]
  expression?: Expression4
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind?: string
  lValueRequested: boolean
  names?: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions17
  leftHandSide?: LeftHandSide
  operator?: string
  rightHandSide?: RightHandSide
}

export interface Argument {
  argumentTypes: any
  commonType?: CommonType
  id: number
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  leftExpression?: LeftExpression
  nodeType: string
  operator?: string
  rightExpression?: RightExpression
  src: string
  typeDescriptions: TypeDescriptions12
  hexValue?: string
  kind?: string
  subdenomination: any
  value?: string
  expression?: Expression3
  memberName?: string
  referencedDeclaration?: number
  arguments?: Argument2[]
  names?: any[]
  name?: string
  overloadedDeclarations?: any[]
}

export interface CommonType {
  typeIdentifier: string
  typeString: string
}

export interface LeftExpression {
  argumentTypes: any
  expression?: Expression2
  id: number
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
  nodeType: string
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions10
  name?: string
  overloadedDeclarations?: any[]
}

export interface Expression2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions9
}

export interface TypeDescriptions9 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions10 {
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
  typeDescriptions: TypeDescriptions11
  hexValue?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  kind?: string
  lValueRequested?: boolean
  subdenomination: any
  value?: string
}

export interface TypeDescriptions11 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions12 {
  typeIdentifier: string
  typeString: string
}

export interface Expression3 {
  argumentTypes?: ArgumentType[]
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions13
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  typeName?: string
}

export interface ArgumentType {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions13 {
  typeIdentifier: string
  typeString: string
}

export interface Argument2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions14
}

export interface TypeDescriptions14 {
  typeIdentifier: string
  typeString: string
}

export interface Expression4 {
  argumentTypes: ArgumentType2[]
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: number[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions15
  expression?: Expression5
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
}

export interface ArgumentType2 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions15 {
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
  typeDescriptions: TypeDescriptions16
}

export interface TypeDescriptions16 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions17 {
  typeIdentifier: string
  typeString: string
}

export interface LeftHandSide {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions18
  baseExpression?: BaseExpression
  indexExpression?: IndexExpression
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
}

export interface TypeDescriptions18 {
  typeIdentifier: string
  typeString: string
}

export interface BaseExpression {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions19
}

export interface TypeDescriptions19 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression {
  argumentTypes: any
  expression: Expression6
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions21
}

export interface Expression6 {
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

export interface RightHandSide {
  argumentTypes: any
  id: number
  name?: string
  nodeType: string
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions22
  expression?: Expression7
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
  hexValue?: string
  kind?: string
  subdenomination: any
  value?: string
}

export interface TypeDescriptions22 {
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
  typeDescriptions: TypeDescriptions23
}

export interface TypeDescriptions23 {
  typeIdentifier: string
  typeString: string
}

export interface Condition {
  argumentTypes: any
  commonType?: CommonType2
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  leftExpression?: LeftExpression2
  nodeType: string
  operator: string
  rightExpression?: RightExpression2
  src: string
  typeDescriptions: TypeDescriptions27
  prefix?: boolean
  subExpression?: SubExpression
}

export interface CommonType2 {
  typeIdentifier: string
  typeString: string
}

export interface LeftExpression2 {
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

export interface RightExpression2 {
  argumentTypes: any
  expression: Expression8
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions26
}

export interface Expression8 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions25
}

export interface TypeDescriptions25 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions26 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions27 {
  typeIdentifier: string
  typeString: string
}

export interface SubExpression {
  argumentTypes: any
  baseExpression: BaseExpression2
  id: number
  indexExpression: IndexExpression2
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions31
}

export interface BaseExpression2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions28
}

export interface TypeDescriptions28 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression2 {
  argumentTypes: any
  expression: Expression9
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions30
}

export interface Expression9 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions29
}

export interface TypeDescriptions29 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions30 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions31 {
  typeIdentifier: string
  typeString: string
}

export interface TrueBody {
  id: number
  nodeType: string
  src: string
  statements: Statement2[]
}

export interface Statement2 {
  expression: Expression10
  id: number
  nodeType: string
  src: string
}

export interface Expression10 {
  argumentTypes: any
  arguments: Argument3[]
  expression: Expression12
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  names: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions36
}

export interface Argument3 {
  argumentTypes: any
  expression: Expression11
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions33
}

export interface Expression11 {
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

export interface TypeDescriptions33 {
  typeIdentifier: string
  typeString: string
}

export interface Expression12 {
  argumentTypes: ArgumentType3[]
  expression: Expression13
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions35
}

export interface ArgumentType3 {
  typeIdentifier: string
  typeString: string
}

export interface Expression13 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions34
}

export interface TypeDescriptions34 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions35 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions36 {
  typeIdentifier: string
  typeString: string
}

export interface EventCall {
  argumentTypes: any
  arguments: Argument4[]
  expression: Expression15
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  names: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions40
}

export interface Argument4 {
  argumentTypes: any
  expression?: Expression14
  id: number
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  memberName?: string
  nodeType: string
  referencedDeclaration?: number
  src: string
  typeDescriptions: TypeDescriptions38
  name?: string
  overloadedDeclarations?: any[]
}

export interface Expression14 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions37
}

export interface TypeDescriptions37 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions38 {
  typeIdentifier: string
  typeString: string
}

export interface Expression15 {
  argumentTypes: ArgumentType4[]
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions39
}

export interface ArgumentType4 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions39 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions40 {
  typeIdentifier: string
  typeString: string
}

export interface Declaration {
  constant: boolean
  id: number
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions41
  typeName: TypeName3
  value: any
  visibility: string
}

export interface TypeDescriptions41 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName3 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions42
}

export interface TypeDescriptions42 {
  typeIdentifier: string
  typeString: string
}

export interface InitialValue {
  argumentTypes: any
  baseExpression: BaseExpression3
  id: number
  indexExpression: IndexExpression3
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions46
}

export interface BaseExpression3 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions43
}

export interface TypeDescriptions43 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression3 {
  argumentTypes: any
  expression: Expression16
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: any
  src: string
  typeDescriptions: TypeDescriptions45
}

export interface Expression16 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions44
}

export interface TypeDescriptions44 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions45 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions46 {
  typeIdentifier: string
  typeString: string
}

export interface Body2 {
  id: number
  nodeType: string
  src: string
  statements: Statement3[]
}

export interface Statement3 {
  assignments?: number[]
  declarations?: Declaration2[]
  id: number
  initialValue?: InitialValue2
  nodeType: string
  src: string
  condition?: Condition2
  falseBody: any
  trueBody?: TrueBody2
}

export interface Declaration2 {
  constant: boolean
  id: number
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions47
  typeName: TypeName4
  value: any
  visibility: string
}

export interface TypeDescriptions47 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName4 {
  id: number
  name: string
  nodeType: string
  src: string
  stateMutability?: string
  typeDescriptions: TypeDescriptions48
}

export interface TypeDescriptions48 {
  typeIdentifier: string
  typeString: string
}

export interface InitialValue2 {
  argumentTypes: any
  baseExpression?: BaseExpression4
  id: number
  indexExpression?: IndexExpression4
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions51
  commonType?: CommonType3
  leftExpression?: LeftExpression3
  operator?: string
  rightExpression?: RightExpression3
}

export interface BaseExpression4 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions49
}

export interface TypeDescriptions49 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression4 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions50
}

export interface TypeDescriptions50 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions51 {
  typeIdentifier: string
  typeString: string
}

export interface CommonType3 {
  typeIdentifier: string
  typeString: string
}

export interface LeftExpression3 {
  argumentTypes: any
  baseExpression: BaseExpression5
  id: number
  indexExpression: IndexExpression5
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions54
}

export interface BaseExpression5 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions52
}

export interface TypeDescriptions52 {
  typeIdentifier: string
  typeString: string
}

export interface IndexExpression5 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions53
}

export interface TypeDescriptions53 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions54 {
  typeIdentifier: string
  typeString: string
}

export interface RightExpression3 {
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
  typeDescriptions: TypeDescriptions55
  value: string
}

export interface TypeDescriptions55 {
  typeIdentifier: string
  typeString: string
}

export interface Condition2 {
  argumentTypes: any
  commonType: CommonType4
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  leftExpression: LeftExpression4
  nodeType: string
  operator: string
  rightExpression: RightExpression4
  src: string
  typeDescriptions: TypeDescriptions58
}

export interface CommonType4 {
  typeIdentifier: string
  typeString: string
}

export interface LeftExpression4 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions56
}

export interface TypeDescriptions56 {
  typeIdentifier: string
  typeString: string
}

export interface RightExpression4 {
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
  typeDescriptions: TypeDescriptions57
  value: string
}

export interface TypeDescriptions57 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions58 {
  typeIdentifier: string
  typeString: string
}

export interface TrueBody2 {
  id: number
  nodeType: string
  src: string
  statements: Statement4[]
}

export interface Statement4 {
  expression?: Expression17
  id: number
  nodeType: string
  src: string
  eventCall?: EventCall2
}

export interface Expression17 {
  argumentTypes: any
  arguments: Argument5[]
  expression: Expression18
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  names: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions62
}

export interface Argument5 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions59
}

export interface TypeDescriptions59 {
  typeIdentifier: string
  typeString: string
}

export interface Expression18 {
  argumentTypes: ArgumentType5[]
  expression: Expression19
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  memberName: string
  nodeType: string
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions61
}

export interface ArgumentType5 {
  typeIdentifier: string
  typeString: string
}

export interface Expression19 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions60
}

export interface TypeDescriptions60 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions61 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions62 {
  typeIdentifier: string
  typeString: string
}

export interface EventCall2 {
  argumentTypes: any
  arguments: Argument6[]
  expression: Expression20
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  kind: string
  lValueRequested: boolean
  names: any[]
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions65
}

export interface Argument6 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions63
}

export interface TypeDescriptions63 {
  typeIdentifier: string
  typeString: string
}

export interface Expression20 {
  argumentTypes: ArgumentType6[]
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions64
}

export interface ArgumentType6 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions64 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions65 {
  typeIdentifier: string
  typeString: string
}

export interface InitializationExpression {
  assignments: number[]
  declarations: Declaration3[]
  id: number
  initialValue: InitialValue3
  nodeType: string
  src: string
}

export interface Declaration3 {
  constant: boolean
  id: number
  name: string
  nodeType: string
  scope: number
  src: string
  stateVariable: boolean
  storageLocation: string
  typeDescriptions: TypeDescriptions66
  typeName: TypeName5
  value: any
  visibility: string
}

export interface TypeDescriptions66 {
  typeIdentifier: string
  typeString: string
}

export interface TypeName5 {
  id: number
  name: string
  nodeType: string
  src: string
  typeDescriptions: TypeDescriptions67
}

export interface TypeDescriptions67 {
  typeIdentifier: string
  typeString: string
}

export interface InitialValue3 {
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
  typeDescriptions: TypeDescriptions68
  value: string
}

export interface TypeDescriptions68 {
  typeIdentifier: string
  typeString: string
}

export interface LoopExpression {
  expression: Expression21
  id: number
  nodeType: string
  src: string
}

export interface Expression21 {
  argumentTypes: any
  id: number
  isConstant: boolean
  isLValue: boolean
  isPure: boolean
  lValueRequested: boolean
  nodeType: string
  operator: string
  prefix: boolean
  src: string
  subExpression: SubExpression2
  typeDescriptions: TypeDescriptions70
}

export interface SubExpression2 {
  argumentTypes: any
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: TypeDescriptions69
}

export interface TypeDescriptions69 {
  typeIdentifier: string
  typeString: string
}

export interface TypeDescriptions70 {
  typeIdentifier: string
  typeString: string
}

export interface ReturnParameters {
  id: number
  nodeType: string
  parameters: any[]
  src: string
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
  DecentralBank: number[]
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
  SourceUnit?: number
  absolutePath?: string
  file?: string
  scope?: number
  symbolAliases?: any[]
  unitAlias?: string
  baseContracts?: any[]
  contractDependencies?: any[]
  contractKind?: string
  documentation: any
  fullyImplemented?: boolean
  linearizedBaseContracts?: number[]
  name?: string
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
  value: any
  anonymous?: boolean
  documentation: any
  implemented?: boolean
  isConstructor?: boolean
  kind?: string
  modifiers?: any[]
  stateMutability?: string
  superFunction: any
}

export interface Children3 {
  attributes?: Attributes4
  id: number
  name: string
  src: string
  children?: Children4[]
}

export interface Attributes4 {
  parameters?: any[]
  name?: string
  stateMutability?: string
  type?: string
  argumentTypes: any
  hexvalue?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  subdenomination: any
  token?: string
  value?: string
  contractScope: any
  referencedDeclaration?: number
  length: any
}

export interface Children4 {
  children?: Children5[]
  id: number
  name: string
  src: string
  attributes?: Attributes12
}

export interface Children5 {
  attributes?: Attributes5
  children?: Children6[]
  id: number
  name: string
  src: string
}

export interface Attributes5 {
  argumentTypes: any
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  isStructConstructorCall?: boolean
  lValueRequested?: boolean
  names?: any[]
  type?: string
  type_conversion?: boolean
  constant?: boolean
  name?: string
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  value: any
  visibility?: string
  operator?: string
  contractScope: any
  referencedDeclaration?: number
  stateMutability?: string
  prefix?: boolean
  assignments?: number[]
  commonType?: CommonType5
}

export interface CommonType5 {
  typeIdentifier: string
  typeString: string
}

export interface Children6 {
  attributes?: Attributes6
  children?: Children7[]
  id: number
  name: string
  src: string
}

export interface Attributes6 {
  argumentTypes?: ArgumentType7[]
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  operator?: string
  prefix?: boolean
  type?: string
  constant?: boolean
  name?: string
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  value?: string
  visibility?: string
  overloadedDeclarations?: number | undefined[]
  referencedDeclaration?: number
  hexvalue?: string
  subdenomination: any
  token?: string
  member_name?: string
  assignments?: number[]
  falseBody: any
  commonType?: CommonType6
  isStructConstructorCall?: boolean
  names?: any[]
  type_conversion?: boolean
}

export interface ArgumentType7 {
  typeIdentifier: string
  typeString: string
}

export interface CommonType6 {
  typeIdentifier: string
  typeString: string
}

export interface Children7 {
  attributes?: Attributes7
  id: number
  name: string
  src: string
  children?: Children8[]
}

export interface Attributes7 {
  argumentTypes?: ArgumentType8[]
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  isStructConstructorCall?: boolean
  lValueRequested?: boolean
  names?: any[]
  type_conversion?: boolean
  member_name?: string
  hexvalue?: string
  subdenomination: any
  token?: string
  name?: string
  constant?: boolean
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  visibility?: string
  commonType?: CommonType7
  operator?: string
}

export interface ArgumentType8 {
  typeIdentifier: string
  typeString: string
}

export interface CommonType7 {
  typeIdentifier: string
  typeString: string
}

export interface Children8 {
  attributes?: Attributes8
  id: number
  name: string
  src: string
  children?: Children9[]
}

export interface Attributes8 {
  argumentTypes?: ArgumentType9[]
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  member_name?: string
  name?: string
  stateMutability?: string
  hexvalue?: string
  subdenomination: any
  token?: string
}

export interface ArgumentType9 {
  typeIdentifier: string
  typeString: string
}

export interface Children9 {
  attributes: Attributes9
  id: number
  name: string
  src: string
  children?: Children10[]
}

export interface Attributes9 {
  argumentTypes: any
  overloadedDeclarations?: any[]
  referencedDeclaration?: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  isStructConstructorCall?: boolean
  lValueRequested?: boolean
  names?: any[]
  type_conversion?: boolean
}

export interface Children10 {
  attributes: Attributes10
  id: number
  name: string
  src: string
  children?: Children11[]
}

export interface Attributes10 {
  argumentTypes?: ArgumentType10[]
  overloadedDeclarations?: any[]
  referencedDeclaration: number
  type: string
  value?: string
  isConstant?: boolean
  isLValue?: boolean
  isPure?: boolean
  lValueRequested?: boolean
  member_name?: string
}

export interface ArgumentType10 {
  typeIdentifier: string
  typeString: string
}

export interface Children11 {
  attributes: Attributes11
  id: number
  name: string
  src: string
}

export interface Attributes11 {
  argumentTypes: any
  overloadedDeclarations: any[]
  referencedDeclaration: number
  type: string
  value: string
}

export interface Attributes12 {
  name?: string
  stateMutability?: string
  type?: string
  constant?: boolean
  indexed?: boolean
  scope?: number
  stateVariable?: boolean
  storageLocation?: string
  value: any
  visibility?: string
  falseBody: any
  assignments?: number[]
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

export interface Events {}

export interface Links {}

export interface Devdoc {
  methods: Methods
}

export interface Methods {}

export interface Userdoc {
  methods: Methods2
}

export interface Methods2 {}
