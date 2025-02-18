# Herramientas de Infraestructura en la Nube

## Descripción General

Las herramientas de infraestructura en la nube permiten a las empresas y desarrolladores diseñar, implementar y gestionar aplicaciones y servicios de manera eficiente y escalable en la nube. Estas herramientas abarcan diferentes categorías como computación, almacenamiento, bases de datos, redes, seguridad, gestión de identidades y monitorización. A continuación, se presentan las herramientas más destacadas de los tres principales proveedores de servicios en la nube: Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure.

## Amazon Web Services (AWS)

### Computación
- **Amazon EC2 (Elastic Compute Cloud)**: Proporciona capacidad de computación escalable en la nube. Los usuarios pueden lanzar y gestionar instancias de servidores virtuales (VMs) y ajustar la capacidad según las necesidades. EC2 ofrece una amplia selección de tipos de instancias optimizadas para diferentes casos de uso, desde aplicaciones de alto rendimiento hasta servidores web básicos.
![Amazon EC2](https://d1.awsstatic.com/product-marketing/EC2/EC2-Product-Page-Diagram_2020.e647dbcdd752b09a271f5e4b0dd0e145d45e5eb8.png)

- **AWS Lambda**: Permite ejecutar código sin aprovisionar ni gestionar servidores. Los usuarios pagan solo por el tiempo de cómputo consumido y no hay cargos cuando el código no se está ejecutando. Lambda es ideal para aplicaciones sin servidor (serverless) y puede integrarse con otros servicios de AWS para crear soluciones escalables y eficientes.
![AWS Lambda](https://d1.awsstatic.com/product-marketing/Lambda/Lambda%20Splash.png)

### Almacenamiento
- **Amazon S3 (Simple Storage Service)**: Ofrece almacenamiento de objetos escalable y duradero. S3 es ideal para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar. Ofrece una alta durabilidad y disponibilidad, y se utiliza comúnmente para copias de seguridad, almacenamiento de datos estáticos y como un almacenamiento de origen para la distribución de contenido.
![Amazon S3](https://d1.awsstatic.com/product-marketing/S3/S3-Product-Page-Diagram_2020.05e3628e041b1e6b2d04ae4b04699c882ec7e8a3.png)

### Bases de Datos
- **Amazon RDS (Relational Database Service)**: Facilita la configuración, operación y escalado de bases de datos relacionales en la nube. Soporta varios motores de bases de datos, incluyendo MySQL, PostgreSQL, Oracle, SQL Server y Amazon Aurora. RDS automatiza tareas como parches de software, copias de seguridad y recuperación ante desastres.
![Amazon RDS](https://d1.awsstatic.com/product-marketing/RDS/RDS-Product-Page-Diagram_2020.06e9cd462d44225267d046d0de9827744b4a60ba.png)

- **Amazon DynamoDB**: Es una base de datos NoSQL totalmente gestionada que admite modelos de datos de documentos y de clave-valor. DynamoDB es conocida por su rendimiento de baja latencia y escalabilidad automática, lo que la hace ideal para aplicaciones con altos volúmenes de tráfico y requisitos de baja latencia.
![Amazon DynamoDB](https://d1.awsstatic.com/product-marketing/DynamoDB/DynamoDB-Product-Page-Diagram_2020.e91c6e82e6b6c14e19c2fe1a2029a0f6bfb8e12f.png)

### Redes
- **Amazon VPC (Virtual Private Cloud)**: Proporciona una red virtual aislada en la nube de AWS donde se pueden lanzar recursos de AWS en una red definida por el usuario. VPC permite tener un control completo sobre el entorno de red, incluyendo la selección de rangos de IP, la creación de subredes y la configuración de tablas de rutas y gateways de red.
![Amazon VPC](https://d1.awsstatic.com/product-marketing/VPC/VPC-Product-Page-Diagram_2020.d4623139f4d1a9ad9e0cd0a48e7ad6cf83b02abe.png)

- **Amazon CloudFront**: Es una red de entrega de contenido (CDN) que distribuye contenido a los usuarios con baja latencia y altas velocidades de transferencia. CloudFront se integra con otros servicios de AWS, como S3 y EC2, para ofrecer una entrega de contenido rápida y segura.
![Amazon CloudFront](https://d1.awsstatic.com/product-marketing/CloudFront/CloudFront-Product-Page-Diagram_2020.901b99b896f5f815325d52cc5f9f222b160128ee.png)

### Seguridad y Gestión de Identidades
- **AWS IAM (Identity and Access Management)**: Permite gestionar el acceso a los servicios y recursos de AWS de manera segura. IAM permite crear y gestionar usuarios, grupos y roles, y utilizar políticas de permisos para definir qué acciones pueden realizar los usuarios en los recursos de AWS.
![AWS IAM](https://d1.awsstatic.com/product-marketing/IAM/IAM-Product-Page-Diagram_2020.b93ebcfd415afdf1a787f230012116a9a4c9b5c3.png)

- **AWS Config**: Realiza un inventario de todas las configuraciones de los diferentes recursos de AWS y ayuda a mantener el cumplimiento de las políticas de la organización. Config permite monitorear cambios en la configuración y evaluar la conformidad con las directrices internas.
![AWS Config](https://d1.awsstatic.com/product-marketing/Config/Config-Product-Page-Diagram_2020.8a1ac2a2e92e61608e6fa34296c0e3cd4fbf9f4d.png)

### Monitorización y Gestión
- **Amazon CloudWatch**: Es un servicio de monitorización de los recursos de la nube de AWS y de las aplicaciones que se ejecutan en AWS. CloudWatch recopila y realiza un seguimiento de métricas, archivos de registro y eventos, permite establecer alarmas y reacciona automáticamente a los cambios en los recursos.
![Amazon CloudWatch](https://d1.awsstatic.com/product-marketing/CloudWatch/CloudWatch-Product-Page-Diagram_2020.deb9b9ac9f26b0d74f72b4b2f8b9294b74684d68.png)

- **AWS Systems Manager**: Un conjunto de herramientas que ayuda a gestionar y automatizar tareas administrativas en los recursos de AWS. Systems Manager proporciona una visión unificada de la infraestructura y facilita la automatización de tareas como parches de software, configuración y despliegue de aplicaciones.
![AWS Systems Manager](https://d1.awsstatic.com/product-marketing/Systems_Manager/SystemsManager-Product-Page-Diagram_2020.a407faab3a7622ef9cb50996dc98fc7fa495ba49.png)

- **AWS CloudTrail**: Registra las actividades del usuario y las llamadas a la API dentro de la organización de AWS. CloudTrail proporciona un registro detallado de las acciones realizadas en la cuenta, lo que facilita la auditoría de seguridad, el monitoreo y la solución de problemas operativos.
![AWS CloudTrail](https://d1.awsstatic.com/product-marketing/CloudTrail/CloudTrail-Product-Page-Diagram_2020.c0df5c2f14b27f6b1711dc25b01f4b979075f3b5.png)

### Despliegue y Gestión de Infraestructura
- **AWS CloudFormation**: Permite describir y aprovisionar todos los recursos de la infraestructura utilizando archivos de texto en formato JSON o YAML. CloudFormation automatiza la creación y configuración de los recursos, lo que facilita el despliegue y la gestión de infraestructuras complejas de manera repetible y segura.
![AWS CloudFormation](https://d1.awsstatic.com/product-marketing/CloudFormation/CloudFormation-Product-Page-Diagram_2020.2ed5ba8f9bfa5edaa480a7e1bc01315ba48759de.png)

## Google Cloud Platform (GCP)

### Computación
- **Google Compute Engine**: Proporciona máquinas virtuales escalables en la nube. Los usuarios pueden crear y gestionar VMs según las necesidades de sus aplicaciones.
![Google Compute Engine](https://cloud.google.com/images/products/compute/compute-engine-f3c79e.svg)

- **Google Cloud Functions**: Permite ejecutar código sin aprovisionar ni gestionar servidores. Ideal para crear aplicaciones sin servidor (serverless) y responder a eventos sin la necesidad de gestionar la infraestructura.
![Google Cloud Functions](https://cloud.google.com/images/products/functions/functions-2d4321.svg)

### Almacenamiento
- **Google Cloud Storage**: Ofrece almacenamiento de objetos escalable y duradero. Es adecuado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.
![Google Cloud Storage](https://cloud.google.com/images/products/storage/storage-1b3da0.svg)

### Bases de Datos
- **Google Cloud SQL**: Servicio de bases de datos relacionales totalmente gestionado. Soporta MySQL, PostgreSQL y SQL Server.
![Google Cloud SQL](https://cloud.google.com/images/products/sql/sql-2a60b5.svg)

### Redes
- **Google Virtual Private Cloud (VPC)**: Proporciona una red virtual aislada en la nube de Google. VPC permite tener un control completo sobre el entorno de red, incluyendo la selección de rangos de IP, la creación de subredes y la configuración de tablas de rutas y gateways de red.
![Google VPC](https://cloud.google.com/images/products/networking/networking-services-and-solutions-9a82e.svg)

- **Google Cloud CDN**: Red de entrega de contenido (CDN) que distribuye contenido a los usuarios con baja latencia y altas velocidades de transferencia. Cloud CDN se integra con otros servicios de Google Cloud para ofrecer una entrega de contenido rápida y segura.
![Google Cloud CDN](https://cloud.google.com/images/products/cdn/cdn-5e4b22.svg)

### Seguridad y Gestión de Identidades
- **Google Cloud IAM**: Permite gestionar el acceso a los servicios y recursos de Google Cloud de manera segura. IAM permite crear y gestionar usuarios, grupos y roles, y utilizar políticas de permisos para definir qué acciones pueden realizar los usuarios en los recursos de Google Cloud.
![Google Cloud IAM](https://cloud.google.com/images/products/iam/iam-4e4a3f.svg)

### Monitorización y Gestión
- **Google Cloud Monitoring**: Servicio de monitorización de los recursos de la nube de Google. Cloud Monitoring recopila métricas, archivos de registro y eventos, permite establecer alarmas y reacciona automáticamente a los cambios en los recursos.
![Google Cloud Monitoring](https://cloud.google.com/images/products/monitoring/monitoring-9a2b93.svg)

### Despliegue y Gestión de Infraestructura
- **Google Cloud Deployment Manager**: Permite describir y aprovisionar todos los recursos de la infraestructura utilizando archivos de configuración en formato YAML. Deployment Manager automatiza la creación y configuración de los recursos, facilitando el despliegue y la gestión de infraestructuras complejas de manera repetible y segura.
![Google Cloud Deployment Manager](https://cloud.google.com/images/products/deployment/deployment-manager-9b4f43.svg)


## Microsoft Azure

### Computación
- **Azure Virtual Machines**: Proporciona capacidad de computación escalable en la nube. Los usuarios pueden crear y gestionar máquinas virtuales según las necesidades de sus aplicaciones.
![Azure Virtual Machines](https://docs.microsoft.com/en-us/azure/virtual-machines/images/overview/azure-vms.svg)

- **Azure Functions**: Permite ejecutar código sin aprovisionar ni gestionar servidores. Ideal para crear aplicaciones sin servidor (serverless) y responder a eventos sin la necesidad de gestionar la infraestructura.
![Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/media/functions-overview/functions-diagram.png)

### Almacenamiento
- **Azure Blob Storage**: Ofrece almacenamiento de objetos escalable y duradero. Es adecuado para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.
![Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/media/storage-blobs-introduction/blob-architecture.png)

### Bases de Datos
- **Azure SQL Database**: Servicio de bases de datos relacionales totalmente gestionado. Soporta SQL Server.
![Azure SQL Database](https://docs.microsoft.com/en-us/azure/sql-database/media/sql-database-technical-overview/architecture.png)

### Redes
- **Azure Virtual Network (VNet)**: Proporciona una red virtual aislada en la nube de Azure. VNet permite tener un control completo sobre el entorno de red, incluyendo la selección de rangos de IP, la creación de subredes y la configuración de tablas de rutas y gateways de red.
![Azure Virtual Network](https://docs.microsoft.com/en-us/azure/virtual-network/media/virtual-network-vnet-plan-design-arm-vnet3/vnet-diagram.png)

- **Azure CDN**: Red de entrega de contenido (CDN) que distribuye contenido a los usuarios con baja latencia y altas velocidades de transferencia. Azure CDN se integra con otros servicios de Azure para ofrecer una entrega de contenido rápida y segura.
![Azure CDN](https://docs.microsoft.com/en-us/azure/cdn/media/cdn-overview/architecture.png)

### Seguridad y Gestión de Identidades
- **Azure Active Directory (AD)**: Permite gestionar el acceso a los servicios y recursos de Azure de manera segura. Active Directory permite crear y gestionar usuarios, grupos y roles, y utilizar políticas de permisos para definir qué acciones pueden realizar los usuarios en los recursos de Azure.
![Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/media/active-directory-overview/architecture.png)

### Monitorización y Gestión
- **Azure Monitor**: Servicio de monitorización de los recursos de la nube de Azure. Azure Monitor recopila métricas, archivos de registro y eventos, permite establecer alertas y reacciona automáticamente a los cambios en los recursos.
![Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/media/overview/overview-architecture.png)

### Despliegue y Gestión de Infraestructura
- **Azure Resource Manager (ARM)**: Permite describir y aprovisionar todos los recursos de la infraestructura utilizando plantillas JSON. Azure Resource Manager automatiza la creación y configuración de los recursos, facilitando el despliegue y la gestión de infraestructuras complejas de manera repetible y segura.
![Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/media/overview/architecture.png)