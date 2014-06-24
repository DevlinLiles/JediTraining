$files = Get-ChildItem .\koans -Recurse -Force -ErrorAction SilentlyContinue -Filter *.js| % `
{
    $filepath = $_.FullName;
    (get-content $filepath) |
        % { $_ -replace 'expect\((.+)\)','expect(toDo)' } |
        set-content $filepath -Force
}