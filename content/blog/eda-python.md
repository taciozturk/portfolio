---
title: Exploratory Data Analysis
description: Exploratory data analysis procedures in Python
publishedAt: 2024-04-12 18:48:00
toc: true
---

# Exploratory Data Analysis

## Data Understanding

### Primary analysis methods

```python
df.shape()
df.head() 
df.dtypes()
df.describe()
df.columns()
```

## Data Preparation

### Copy

*Following any mutating operation on a dataframe, it is more appropriate to copy the old dataframe to a new one.*

```python
df.copy()
```

### Datetime

*It is convenient to convert date values to a datetime data type. This allows us to perform additional operations which would not be possible on a string data type.*

```python
df.to_datetime()
```

### Numeric

*Sometimes, we want to change the string data type to numeric, e.g. year.*

```python
df.to_numeric()
```

### Is_na

*Proper way to summarize the occurrences of null values in all columns.*

```python
df.is_na().sum()
```

### Duplicated

*When we look for duplicates in a column, it is possible to chain the locate operation and duplicated method with a specified subset column label.*

```python
df.loc[df.duplicated(subset = ['Column Name'])]
```

### Unique

*In order to check for unique values in a given column.*

```python
pd.unique(df['Column Name'])
```

### Query

*We would filter given columns by a given value with the query method.*

```python
df.query('Column Name == "Value"')
```

### Reset index

*We want the index numbers to remain sequential after a certain operation, e.g. dropping rows. With drop = True parameter, we replace the newly reset index to be replaced with the old one, preventing an additional index column to be appended.

```python
df.reset_index(drop = True)
```

## Univariate Analysis

### Plotting Feature Distributions

* Histogram
* KDE
* Boxplot

```python
# Bar Plot
df.['Column Name'].value_counts().plot(kind = 'bar', title = 'title')

# Horizontal Bar Plot
df.['Column Name'].value_counts().plot(kind = 'barh', title = 'title')

```

## Feature Relationships

* Scatterplot
* Heat-map Correlation

```python
sns.heatmap(df.corr(), annot=True)
```

* Pairplot

```python
sns.pairplot(df, vars=['Columns'])
```

* Group-by Comparisons
