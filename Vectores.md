# Vectores

$\mathbf{x}=\begin{bmatrix}
x_1 \\
x_2 \\
\vdots  \\
x_m
\end{bmatrix}$

$\mathbf{x}= [x_1,x_2, ..., x_m]$

## Multiplication of Vectors

• The inner or dot product of two vectors with an angle θ between them is a scalar
defined by

$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \cdots  + u_mv_m$
$=u v \cos(\theta)$
$= \mathbf{u}^T \mathbf{v}=$
$= \mathbf{v}^T \mathbf{u}=$

* Cross product of two vectors is a vector, which is perpendicular to both the vectors,
i.e., if $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$, the cross product of $\mathbf{u}$ and $\mathbf{v}$ is
the vector $\mathbf{u} \times \mathbf{v} = (u_2v_3 − u_3v_2, u_3v_1 − u_1v_3, u_1v_2 − u_2v_1)$.
NOTE: The cross product is only defined for vectors in $\mathbb{R}^3$.

$\mathbf{u} \times \mathbf{v} = ||u|| ||v|| \sin(\theta)$

## Orthogonal Vectors

The two vectors are orthogonal if the angle between them is 90◦, i.e., when $\mathbf{x}^T \mathbf{y} = 0$.


## Linear Functions

\begin{eqnarray}
y_1
= a_1x_1 + a_2x_2 + ··· +a_nx_n \\
y_2
= b_1x_1 + b_2x_2 +· · ·+b_nx_n
\end{eqnarray}

## Matrices

$\textbf{X} = \begin{bmatrix}
x_{11} & x_{12}  & x_{13} \\
x_{21} & x_{22}  & x_{23}  \\
x_{31} & x_{32}  & x_{33}  \\
\end{bmatrix}$

## Transpose of a Matrix

$\textbf{X} = \begin{bmatrix}
x_{11} & x_{21}  & x_{31} \\
x_{12} & x_{22}  & x_{32} \\
x_{13} & x_{23}  & x_{33} \\
\end{bmatrix}$

$(\mathbf{X}^T)_{i,j} = (\mathbf{X})_{j,i}$

## Identity Matrix

$\textbf{I} = \begin{bmatrix}
1 & 0 & \cdots  & 0 \\
0 & 1 & \cdots & 0  \\
\vdots  & \vdots  & \ddots  & \vdots  \\
0& 0 & \cdots  & 1 \\
\end{bmatrix}$

## Inverse of a Matrix

The inverse of a matrix
$\mathbf{A}$ is denoted as $\mathbf{A}^{−1}$, and it is defined as

$\mathbf{A}^{−1} \mathbf{A} = \mathbf{I}$


The matrix inverse can be used to solve the general equation $\mathbf{Ax} = \mathbf{b}$

$\mathbf{A}^{−1} \mathbf{Ax} = \mathbf{A}^{−1}\mathbf{b}$
$\mathbf{Ix} = \mathbf{A}^{−1}\mathbf{b}$

## Representing Linear Equations in Matrix Form


\begin{eqnarray}
y_1
= a_{11}x_1 + a_{12}x_2 + ··· +a_{1n}x_n \\
y_2
= a_{21}x_1 + a_{22}x_2 + ··· +a_{2n}x_n \\
\vdots \\
y_m
= a_{m1}x_1 + a_{m2}x_2 + ··· +a_{mn}x_n \\
\end{eqnarray}


The above linear equations can be written in matrix form as

$
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_m
\end{bmatrix} = \begin{bmatrix}
a_{11} & a_{12} & ... & a_{1n} \\
a_{21} & a_{22} & ... & a_{2n} \\
\vdots &  \vdots& \vdots & \vdots \\
a_{m1} & a_{m2} & ... & a_{mn} \\
\end{bmatrix} \begin{bmatrix}
x_{11} & x_{21} & ... & x_{1n} \\
x_{12} & x_{22} & ... & x_{2n} \\
\vdots &  \vdots& \vdots & \vdots \\
x_{1n} & x_{2n} & ... & x_{mn} \\
\end{bmatrix} $

## Matrix Transformations

## Norms

The  $l_p$ norm
is represented by

$||x||_p = (\sum_i|x_i|^p)^{\frac{1}{p}}$

Let us consider a vector $\mathbf{X}$, represented as $(x_1, x_2, ··· , x_n)^T$

Norms can be represented as

$l_1$ norm = $||x||_1^1 = |x_1| + |x_2| + ... + |x_n|$

$l_2$ norm = $||x||_2^2 = \sqrt{x_1^2 + x_2^2 + ... + x_n^2}$

## Optimization

The $l_2$ optimization requirement can be represented as, minimizing $l_2$ norm,

find $\{min\} ||w||_2^2$ subject to $y = wX$

This could be computationally very expensive, however, Lagrange multipliers can
ease the problem greatly:

$L(w) = ||w||_2^2 + λ^T (w X -y)$
 
λ is the Lagrange multiplier.

Equating the derivative of Eq. 1.5.4 to zero gives us the optimal solution:

$\hat{w}_{opt} = \frac{1}{2} X^T \lambda$

Substituting this optimal estimate of w in Eq. 1.5.3, we get the value of λ:

$y = \frac{1}{2}XX^T λ$

$λ = 2(XX^T)^{-1}y $

##  $l_1$ Optimization

The $l_1$ optimization requirement can be represented as, minimizing $l_1$ norm,

find $\{min\} ||w||_1^1$ subject to:
$y = wX$

## Rewriting the Regression Model in Matrix Notation

$y_i = w_0h_0(x_i) + w_1h_1(x_i) + w_2h_2(x_i) + ... + w_nh_n(x_i) + \epsilon_i$
$=\sum_{j=0}^{n} w_jh_j(x_i) + \epsilon_i$

## Cost of a n-Dimensional Function

The estimate of the ith observation from the regression equation (Eq. 1.6.2) $y_i$ is
represented as $\hat{y}_i$, which is

$\hat{y}_i = [h_0(x_i), h_1(x_i), ..., h_n(x_i)] \begin{bmatrix}
w_0 \\
w_1 \\
\vdots \\
w_n
\end{bmatrix} + \epsilon_i$

The cost or residual sum of squares (RSS) of a regression equation is defined as
the squared difference between the actual value $y_i$ and the estimate $\hat{y}_i$, which is

RSS(w) = $\sum_{i=1}^m (y_i - \hat{y}_i)^2$

= $\sum_{i=1}^m (y_i - h(x_i)^T w_i)^2$

= $(y - Hw)^T (y - Hw)$

## Computing the Gradient of the Cost

## Closed-Form Solution

## Gradient Descent

## An Example of Gradient Descent Optimization

## Eigendecomposition

## Singular Value Decomposition (SVD)

## Principal Component Analysis (PCA)

## PCA and SVD

## Computational Errors

## Rounding—Overflow and Underflow

## Conditioning

## Numerical Optimization














