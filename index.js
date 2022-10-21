function receivesAFunction (functionArg)
{
  return functionArg()
}

function returnsANamedFunction ()
{
  return function nameFunction() {}
}

function returnsAnAnonymousFunction()
{
  return ()=> ''
}
