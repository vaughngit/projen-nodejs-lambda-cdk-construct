# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NodeJsPowerToolsFunction <a name="NodeJsPowerToolsFunction" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction"></a>

#### Initializers <a name="Initializers" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer"></a>

```typescript
import { NodeJsPowerToolsFunction } from 'projen-nodejs-lambda-cdk-construct'

new NodeJsPowerToolsFunction(scope: Construct, id: string, props: IPowerToolsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.props">props</a></code> | <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps">IPowerToolsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps">IPowerToolsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.isConstruct"></a>

```typescript
import { NodeJsPowerToolsFunction } from 'projen-nodejs-lambda-cdk-construct'

NodeJsPowerToolsFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.dashboardWidgets">dashboardWidgets</a></code> | <code>aws-cdk-lib.aws_cloudwatch.IWidget[]</code> | CloudWatch Widgets for Dashboard. |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | The new function. |
| <code><a href="#projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | CloudWatch Log Group. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dashboardWidgets`<sup>Required</sup> <a name="dashboardWidgets" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.dashboardWidgets"></a>

```typescript
public readonly dashboardWidgets: IWidget[];
```

- *Type:* aws-cdk-lib.aws_cloudwatch.IWidget[]

CloudWatch Widgets for Dashboard.

---

##### `function`<sup>Required</sup> <a name="function" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.function"></a>

```typescript
public readonly function: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

The new function.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="projen-nodejs-lambda-cdk-construct.NodeJsPowerToolsFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

CloudWatch Log Group.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IPowerToolsProps <a name="IPowerToolsProps" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps"></a>

- *Implemented By:* <a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps">IPowerToolsProps</a>

Creates a Lambda function from the Typescript source.

Includes PowerTools logging option settings.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.entry">entry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.functionName">functionName</a></code> | <code>string</code> | Debug log sampling rate. |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logEvent">logEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logRetention">logRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.memorySize">memorySize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.metricsNamespace">metricsNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |

---

##### `entry`<sup>Required</sup> <a name="entry" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* 'testfunction'

Debug log sampling rate.

Zero means all events.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `label`<sup>Optional</sup> <a name="label" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logEvent`<sup>Optional</sup> <a name="logEvent" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logEvent"></a>

```typescript
public readonly logEvent: string;
```

- *Type:* string

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.logRetention"></a>

```typescript
public readonly logRetention: string;
```

- *Type:* string

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.memorySize"></a>

```typescript
public readonly memorySize: string;
```

- *Type:* string

---

##### `metricsNamespace`<sup>Optional</sup> <a name="metricsNamespace" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.metricsNamespace"></a>

```typescript
public readonly metricsNamespace: string;
```

- *Type:* string

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="projen-nodejs-lambda-cdk-construct.IPowerToolsProps.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

